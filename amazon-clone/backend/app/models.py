products = [
    {
        "id": "1",
        "title": "Sample Product 1",
        "description": "This is a great product.",
        "price": 29.99,
        "image": "/images/sample1.jpg"
    },
    {
        "id": "2",
        "title": "Sample Product 2",
        "description": "This is another great product.",
        "price": 39.99,
        "image": "/images/sample2.jpg"
    }
]

def get_all_products():
    return products

def get_product_by_id(product_id):
    return next((product for product in products if product["id"] == product_id), None)

def add_product(product):
    products.append(product)

def update_product(product_id, new_data):
    product = get_product_by_id(product_id)
    if product:
        product.update(new_data)
        return product
    return None

def delete_product(product_id):
    global products
    products = [product for product in products if product["id"] != product_id]
