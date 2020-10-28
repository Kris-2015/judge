# Sign Up Page

## Project setup

### Backend Setup (Django & PostgreSQL)
## Part 1 (Setup of Python and PostgreSQL):
- Download latest version of python and pip (python package installer)
- Setup the virtual environment pip install virtualenv and pip install virtualenvwrapper
- Download the postgre and install. Follow instruction as shown. By default, postgre is configured in port 5432

## Part 2 (Setting up Django project):
- Create a virtual environemt virtualenv yourprojectenv
- Activate virtual environment -  yourprojectenv\Scripts\activate
- Install Django - pip install Django
- Install postgreSQL connector from django - pip install psycopg2
- Install all the dependencies - pip install requirements.txt

##Part 3 (Migration files and db setting):
- Configure database settting with db name, username and password. Change port if required
- Run migration command "python manage.py makemigrations" for create tables in postgreSQL

### React Page Setup
1. Run npm install for install basic react package for application
2. Run npm start to start the development server
