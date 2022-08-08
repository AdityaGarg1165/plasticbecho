const PRODUCTS = [
    {
        id: 100,
        name: 'Plastic box',
        price: "50 per kg",
        image: require('./1.png'),
        description: ''
    },
    {
        id: 101,
        name: 'Plastic wrapperd',
        price: 600,
        image: require('./2.jpg'),
        description: ''
    },
    {
        id: 102,
        name: 'Other',
        price: 2,
        image: require('./3.png'),
        description: ''
    }
];
export function getProducts() {
    return PRODUCTS;
}
export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}