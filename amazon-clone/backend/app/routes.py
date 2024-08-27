import pyodbc
from flask import Blueprint, request, jsonify

main = Blueprint('main', __name__)

# Database connection setup
def get_db_connection():
    conn = pyodbc.connect(
        'DRIVER={ODBC Driver 17 for SQL Server};'
        'SERVER=your_server_name;'
        'DATABASE=your_database_name;'
        'UID=your_username;'
        'PWD=your_password'
    )
    return conn

# Route to search for products
@main.route('/search', methods=['GET'])
def search_products():
    query = request.args.get('q')
    if not query:
        return jsonify([])

    conn = get_db_connection()
    cursor = conn.cursor()

    # SQL query to search for products
    cursor.execute("SELECT id, title, description, price FROM Products WHERE title LIKE ?", f'%{query}%')
    products = cursor.fetchall()

    # Convert the result to JSON format
    products_json = [
        {"id": row[0], "title": row[1], "description": row[2], "price": row[3]}
        for row in products
    ]

    conn.close()

    return jsonify(products_json)
