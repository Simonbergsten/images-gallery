# from fastapi import FastApi 
from flask import Flask
import requests

UNSPLASH_URL = ""
UNSPLASH_KEY = ""


app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello, World!"

@app.route("/new-image")
def new_image():
    word = requests.args.get("query")
    return {"word":word}


if __name__=="__main__":
    app.run(host="0.0.0.0", port = 5050)
