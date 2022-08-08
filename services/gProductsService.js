const PRODUCTS = [
    {
        id: 132,
        name: 'Poleythene',
        price: "50 per kg",
        image: require('./5.jpg'),
        description: ''
    },
  
];
export function getProducts() {
    return PRODUCTS;
}
export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}