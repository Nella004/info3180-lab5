from flask import Flask
from .config import Config
from .models import db  

from flask_wtf.csrf import CSRFProtect
app = Flask(__name__)
csrf = CSRFProtect(app)
app.config.from_object(Config)

db.init_app(app)  

from app import views
