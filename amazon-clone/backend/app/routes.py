import pyodbc
from flask import Blueprint, request, jsonify

main = Blueprint('main', __name__)

# Database connection setup


def get_db_connection():
    conn = pyodbc.connect(
        'DRIVER={SQL Server};'
        'SERVER=localhost\SQLEXPRESS;'
        'DATABASE=AmazonCloneDB;'
        'UID=user2004;'
        'PWD=Kirti@1234'
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

    # Check if the query is a digit (search by id or product_id)
    if query.isdigit():
        cursor.execute(
            "SELECT id, product_id, title, description, price FROM Products WHERE id = ? OR product_id = ?", (query, query))
    else:
        cursor.execute(
            "SELECT id, product_id, title, description, price FROM Products WHERE title LIKE ?", f'%{query}%')

    products = cursor.fetchall()

    # Convert the result to JSON format
    products_json = [
        {"id": row[0], "product_id": row[1], "title": row[2],
            "description": row[3], "price": row[4]}
        for row in products
    ]

    conn.close()

    return jsonify(products_json)
