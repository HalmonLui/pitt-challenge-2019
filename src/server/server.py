from flask import Flask
import requests
from bs4 import BeautifulSoup

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/get-pill')
def get_pill(color, shape, imprint):
    # https://pillbox.nlm.nih.gov/results.html?medicine_name=&imprint=advil&imprint=advil&shape=Round&color=Blue&inactive_ingredients=&repackaged=false&page=1&items_per_page=20
    URL = "https://pillbox.nlm.nih.gov/results.html?medicine_name=&imprint={}&imprint=advil&shape={}&color={}&inactive_ingredients=&repackaged=false&page=1&items_per_page=20".format(imprint, shape, color)
    r = requests.get(URL)

    soup = BeautifulSoup(r.content, 'html5lib')

    pill = ""

    table = soup.find('span', attrs = {'class':'info'})
    pill = table[1]
    return pill
