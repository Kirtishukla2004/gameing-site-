from flask import Flask
from .extensions import db  # Import db from extensions
# Import db from extensions.py
from .routes import main as main_blueprint


def create_app():
    app = Flask(__name__)

    # Database configuration
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mssql+pyodbc://user2004:Kirti@1234'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    # Initialize the database with the app
    db.init_app(app)

    # Register the main blueprint
    app.register_blueprint(main_blueprint)

    return app
