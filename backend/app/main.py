import sys
import os
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from fastapi import FastAPI
import models
from routes import router
from config import engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(router, tags=["employee"])