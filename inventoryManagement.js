// Write your code here

let products =[`Laptop`, `Phone`, `Headphones`, `Monitor`];

// calling the function to log the first product
function logFirstProduct() {
  console.log(products[0]);
}

logFirstProduct();


function addProduct(product) {
  products.push(product);
  console.log(`Added product: ${product}`);
}

addProduct(`Keyboard`);


function updateProductName(index, newName) {
  if (index >= 0 && index < products.length) {
    products[index] = newName;
  }
  console.log(`Updated product at index ${index} to: ${newName}`);
}

updateProductName(1, `Smartphone`);


function removeLastProduct() {
  products.pop();
  console.log(`Removed the last product`);
}
removeLastProduct();

console.log(products);

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
