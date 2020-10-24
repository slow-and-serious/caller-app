# caller-app

## Authors:
[Joe Lee](https://github.com/josephlee3454), [Lee-Roy King](https://github.com/leeroywking), [Leo Kukharau](https://github.com/LeoKuhorev), [Richard Whitehead](https://github.com/RichWhitehead), [William Koger]()


## GETTING STARTED:
### Development
- in the project directory
    - `poetry shell` to start your virtual environment
    - `poetry install` to install dependencies
    - create .env file with listed <a href="#env">below</a> variables and save it into 'server' directory
    - `python manage.py runserver` - to run server
- navigate to the `frontend` directory and run `npm run start` or `yarn start`
Now you have the back end running on `localhost:8000` and the front end running on `localhost:3000`


### Production (using Docker)
- make sure that you have 
- `docker-compose up --build -d` to run the server, then navigate to `localhost`

If you're having troubles with installing `psycopg2` try this solution (for Mac users):  
`brew install openssl`  
`export LIBRARY_PATH=$LIBRARY_PATH:/usr/local/opt/openssl/lib/`  
`pip3 install psycopg2`

### <a name="env"></a> ENV variables:

SECRET_KEY=secret key for the app (typically 50-characters long string)  
DEBUG=should be set to True in development  
ALLOWED_HOSTS=localhost,127.0.0.1 (for testing)  
DB_NAME=name of the DB (see slack)  
DB_USER=DB username(see slack)  
DB_PASS=DB password(see slack)  
DB_HOST=DB host (see slack)  
DB_PORT=DB port(see slack)  
CORS_ALLOWED_ORIGINS=make sure to include `http://localhost:3000,http://localhost` 

## API:

`/` - landing page;  
`admin/` - site admin page;

## Additional information:

[Requirements](./docs/requirements.md)  
[Project Management](https://github.com/401n1-midterm/penny-pincher/projects/1)

### DB Schema:

TBD

### Dependency Documentation:

TBF

### Dev Dependencies:

TBD