from flask import Blueprint, request, jsonify
from .models import Product

main = Blueprint('main', __name__)

@main.route('/search', methods=['GET'])
def search_products():
    query = request.args.get('q')
    if not query:
        return jsonify([])

    products = Product.query.filter(Product.title.ilike(f"%{query}%")).all()

    products_json = [
        {"id": product.id, "title": product.title, "description": product.description, "price": product.price}
        for product in products
    ]

    return jsonify(products_json)
