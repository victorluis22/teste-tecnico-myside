export function findProductByName(name, products) {
    return products.filter(product => 
      product.title.toLowerCase().includes(name.toLowerCase())
    );
  }