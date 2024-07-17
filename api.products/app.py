from flask import Flask, jsonify
from flask_mysqldb import MySQL

app = Flask(__name__)

# MySQL configurations
app.config['MYSQL_HOST'] = 'mariadb'
app.config['MYSQL_USER'] = 'interviewer'
app.config['MYSQL_PASSWORD'] = 'changeme'
app.config['MYSQL_DB'] = 'marz'

mysql = MySQL(app)

@app.route('/api/products/')
def get_products():
    cur = mysql.connection.cursor()
    cur.execute("SELECT ProductID, ProductName, ProductPhotoURL, ProductStatus FROM Product WHERE ProductStatus = 'Active'")
    products = cur.fetchall()
    cur.close()
    
    return jsonify([
        {
            "ProductID": product[0],
            "ProductName": product[1],
            "ProductPhotoURL": product[2],
            "ProductStatus": product[3]
        } for product in products
    ])

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5002)