const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

console.log('Price Objects:');
const priceObjects = prices.map(price => ({ price, salePrice: price / 2 }));
console.log(priceObjects);

console.log('Formatted Prices:');
const formattedPrices = prices.map(price => `$${price.toFixed(2)}`);
console.log(formattedPrices);
