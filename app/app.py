from contextlib import nullcontext
from flask import Flask, render_template, redirect, request, session
from flask_sqlalchemy import SQLAlchemy
import logging
logging.basicConfig(level=logging.DEBUG)

# initiate flask
app = Flask(__name__)
app.secret_key = 'admin'

# initiate db
app.config['SQLALCHEMY_DATABASE_URI'] = '{SGBD}://{user}:{password}@{server}/{database}'.format(
    SGBD = 'mysql+mysqlconnector',
    user = 'root',
    password = 'Password42-',
    server = '127.0.0.1',
    database = 'code_highlighter'
)

# connect app to sqlalchemy
db = SQLAlchemy(app)

# code db model
class Codes(db.Model):
    ID = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.String(60), nullable=False)
    descriptor = db.Column(db.String(200), nullable=False)
    code = db.Column(db.String(1000), nullable=False)
    language = db.Column(db.String(12), nullable=False)
    color = db.Column(db.String(7), nullable=False)
    author_id = db.Column(db.Integer)
    likes = db.Column(db.Integer)

# user db model
class Users(db.Model):
    ID = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(60), nullable=False)
    login = db.Column(db.String(30), primary_key=True, nullable=False)
    photo_url = db.Column(db.String(120), nullable=False)


# could have business logic to check if user is logged and choose to send it to login page or editor page
# not doing that since it's just for show
@app.route('/')
def index():
    return redirect('/code-editor') 



@app.route('/code-editor', methods=['GET', 'POST'])
def code_editor():
    if (request.method == 'POST' and isLogged()):
        createCode(request)
        return redirect('/community')
    elif (request.method == 'POST' and not isLogged()):
        return redirect('/login')
    else:
        return render_template('code-editor.html') 



def createCode(request):
    new_code = Codes(
        title = request.form['title'],
        descriptor = request.form['description'],
        language = request.form['language'],
        color = request.form['color'],
        code = request.form['code'],
        author_id = getAuthorId(),
        likes = 0
    )

    db.session.add(new_code)
    db.session.commit()


def getAuthorId():
    login = session['user']['login']
    user = Users.query.filter_by(login=login).first()
    return user.ID


def isLogged():
    if (session['user']): 
        return True
    else: 
        return False



@app.route('/community')
def community():
    codes = Codes.query.order_by(Codes.ID)
    authors = getAuthors(codes)
    return render_template('community.html', codes=codes, authors=authors)


def getAuthors(codes):
    authors = {}
    for code in codes:
        user = Users.query.filter_by(ID=code.author_id).first()
        authors[code.author_id] = {
            'ID' : user.ID,
            'name' : user.name,
            'photo_url' : user.photo_url
        }
    return authors



@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        user = Users.query.filter_by(login=request.form['login']).first()
        if (user):
            addUserToSession(user)
        else:
            new_user = Users( 
                name = request.form['name'], 
                login = request.form['login'], 
                photo_url = request.form['photo_url'] 
            )
            createUser(new_user)
            addUserToSession(new_user)

        return {'status': 200, 'message': 'user logged in'}
    return render_template('login.html')


def createUser(new_user):
    db.session.add(new_user)
    db.session.commit()


def addUserToSession(user):
    session['user'] = { 'name': user.name, 'login': user.login, 'photo_url': user.photo_url }


@app.route('/logout')
def logout():
    session['user'] = None
    return redirect('/')

 
app.run(debug=True)