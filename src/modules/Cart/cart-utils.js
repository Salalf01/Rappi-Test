export const calculateFinalPrice = (data) =>{
  let prices = [];
  let price = 0;
  data.forEach(product => {
    let productPrice = product.price.replace(/\D/g,'');
    prices.push(productPrice * product.quantity);    
    prices.forEach(prices =>{
      price = price + prices;
    });
  });
  price = "$" + price; 
  return price;
};