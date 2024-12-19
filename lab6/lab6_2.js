function getProductDetails(productId, successCallback, errorCallback) {
    const products = [
        { id: 1, name: 'First product', price: 10 },
        { id: 2, name: 'Second product', price: 20 },
        { id: 3, name: 'Third product', price: 30 }
    ];

    setTimeout(() => {
        const product = products[productId-1];
        if (product) {
            successCallback(product);
        } else {
            errorCallback("Product not found.");
        }
    }, 1000);
}

const onSuccess = (product) => {
    console.log('Product details:', product);
};

const onError = (error) => {
    console.error('Error:', error);
};

let productId = prompt('Enter product id:');

getProductDetails(productId, onSuccess, onError);