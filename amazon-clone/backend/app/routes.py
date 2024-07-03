from flask import Blueprint, jsonify, request
from .models import get_all_products, get_product_by_id, add_product, update_product, delete_product

main = Blueprint('main', __name__)

@main.route('/products', methods=['GET'])
def get_products():
    return jsonify(get_all_products()), 200

@main.route('/products/<product_id>', methods=['GET'])
def get_product(product_id):
    product = get_product_by_id(product_id)
    if product:
        return jsonify(product), 200
    return jsonify({"error": "Product not found"}), 404

@main.route('/products', methods=['POST'])
def create_product():
    data = request.get_json()
    add_product(data)
    return jsonify(data), 201

@main.route('/products/<product_id>', methods=['PUT'])
def update_product_route(product_id):
    data = request.get_json()
    updated_product = update_product(product_id, data)
    if updated_product:
        return jsonify(updated_product), 200
    return jsonify({"error": "Product not found"}), 404

@main.route('/products/<product_id>', methods=['DELETE'])
def delete_product_route(product_id):
    delete_product(product_id)
    return '', 204
