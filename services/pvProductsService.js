const PRODUCTS = [
    {
        id: 130,
        name: 'Pvc',
        price: "50 per kg",
        image: require('./4.jpeg'),
        description: ''
    },
  
];
export function getProducts() {
    return PRODUCTS;
}
export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}