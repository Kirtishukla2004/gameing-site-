# app/routes.py

from flask import Blueprint, jsonify
from .products import get_all_products, get_product_by_id

main = Blueprint('main', __name__)

@main.route('/', methods=['GET'])
def home():
    return jsonify({"message": "Welcome to the Amazon Clone API"}), 200

@main.route('/products', methods=['GET'])
def get_products():
    products = get_all_products()
    return jsonify(products), 200

@main.route('/products/<int:product_id>', methods=['GET'])
def get_product(product_id):
    product = get_product_by_id(product_id)
    if product:
        return jsonify(product), 200
    else:
        return jsonify({"error": "Product not found"}), 404
