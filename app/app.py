from flask import Flask, render_template, redirect, request, session
import logging

app = Flask(__name__)
app.secret_key = 'admin'

class Code:
    def __init__(self, title, description, code, language, color, author, photo):
        self.title = title
        self.description = description
        self.code = code
        self.language = language
        self.color = color
        self.author = author
        self.photo = photo

code1 = Code(
    'Hello world', 
    'Say hello to the world', 
    'console.log("hello world")', 
    'javascript', 
    '#d7c244', 
    'Daniel Ben',
    'https://avatars.githubusercontent.com/u/74229068?v=4'
)


codes = [ code1 ]


@app.route('/')
def index():
    return redirect('/code-editor') 


@app.route('/code-editor')
def code_editor():
    return render_template('code-editor.html')


@app.route('/create_code', methods=['POST'])
def create_code():
    title = request.form['title']
    description = request.form['description']
    language = request.form['language']
    color = request.form['color']

    code = 'teste'
    author = 'Daniel Ben'
    photo = 'https://avatars.githubusercontent.com/u/74229068?v=4'

    code = Code(title, description, code, language, color, author, photo)
    app.logger.info(' -------------------------------')
    app.logger.info(request.form)
    app.logger.info(' -------------------------------')

    # codes.append(code)
    # return redirect('/community')
    return redirect('/code-editor')


@app.route('/community')
def community():
    return render_template('community.html', codes=codes)


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        session['user'] = { 'username': request.form['username'], 'photo_url': request.form['photo_url'] }
        return {'status': 200, 'message': 'user logged in'}
    return render_template('login.html')

@app.route('/logout')
def logout():
    session['user'] = None
    return redirect('/')

 
app.run(debug=True)