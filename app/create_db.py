import mysql.connector
from mysql.connector import errorcode

## START CONECTION ##
print('Connecting...')
try:
    connection = mysql.connector.connect(
        host='127.0.0.1',
        user='root',
        password='Password42-'
    )
except mysql.connector.Error as err:
    if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
        print("Error with user or password")
    else:
        print(err)
## START CONECTION ##

##############################################################################

## START CURSOR ##
cursor = connection.cursor()
## START CURSOR ##

##############################################################################

## CREATE DB AND TABLES ##

###### WARNING #######
# THIS WILL DELETE AN ALREADY EXISTING DATA BASE
# IF YOU WISH TO RESET PREVIOUS DB, UNCOMMENT FOLLOWING LINES

cursor.execute("DROP DATABASE IF EXISTS code_highlighter;")

###### WARNING #######

cursor.execute("CREATE DATABASE code_highlighter;")
cursor.execute("USE code_highlighter;")

TABLES = {}
TABLES['users'] = (''' 
    CREATE TABLE `users` (
      `ID` smallint NOT NULL AUTO_INCREMENT,
      `name` varchar(60) NOT NULL,
      `login` varchar(30) NOT NULL,
      `photo_url` varchar(120) NOT NULL,
      PRIMARY KEY (`ID`, `login`)
    ) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
''')
TABLES['codes'] = (''' 
    CREATE TABLE `codes` (
      `ID` smallint NOT NULL AUTO_INCREMENT,
      `title` varchar(60) NOT NULL,
      `descriptor` varchar(200) NOT NULL,
      `language` varchar(12) NOT NULL,
      `color` varchar(7) NOT NULL,
      `code` varchar(1000) NOT NULL,
      `author_id` smallint NOT NULL,
      `likes` smallint DEFAULT '0',
      PRIMARY KEY (`ID`),
      KEY `fk_author_id` (`author_id`),
      CONSTRAINT `fk_author_id` FOREIGN KEY (`author_id`) REFERENCES `users` (`ID`)
    ) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
''')

for table_name in TABLES:
    create_table = TABLES[table_name]
    try:
        print('Creating table {}'.format(table_name), end=' ')
        cursor.execute(create_table)
    except mysql.connector.Error as err:
        print(err.msg)
    else:
        print('OK')
## CREATE DB AND TABLES ##

##############################################################################

## INSERT USERS IN USERS TABLE ##
insert_in_users = (''' 
    INSERT INTO `users`
        (`ID`,
        `name`,
        `login`,
        `photo_url`)
    VALUES
        (%s, %s, %s, %s);
    ''')
users = [
    (
        1,
        'Daniel Ben',
        'daniel-ben',
        'https://avatars.githubusercontent.com/u/74229068?v=4'
    )
]
cursor.executemany(insert_in_users, users)

cursor.execute('SELECT * FROM users;')
print('----------- Users: -------------')
for user in cursor.fetchall():
    print(user[1]);
## INSERT USERS IN USERS TABLE ##

##############################################################################

## INSERT CODES IN CODES TABLE ##
insert_in_codes = (''' 
    INSERT INTO codes (
        `title`,
        `descriptor`,
        `language`,
        `color`,
        `code`,
        `author_id`,
        `likes`
    )
    VALUES (%s, %s, %s, %s, %s, %s, %s);
''')
codes = [
    (
        'Hello world',
        'Say hello to world',
        'Javascript',
        '#331ED2',
        'console.log("hello world")',
        1,
        0
    ),
    (
        'Example 2',
        'You can store your codes here to access and share them at any time',
        'javascript',
        '#2D1E1E',
        'const text = "code"; console.log("your" + text + "here");',
        1,
        0
    )
]
cursor.executemany(insert_in_codes, codes)

cursor.execute('SELECT * FROM codes;')
print('----------- Codes: -------------')
for code in cursor.fetchall():
    print(code[1]);
## INSERT CODES IN CODES TABLE ##

##############################################################################

connection.commit()
cursor.close()
connection.close()