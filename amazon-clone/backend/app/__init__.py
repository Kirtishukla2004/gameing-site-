from flask import Flask
from .routes import main as main_blueprint

def create_app():
    app = Flask(__name__)

    # Register the main blueprint
    app.register_blueprint(main_blueprint)

    return app
