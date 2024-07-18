let basePrice = 100;
let discount = "10%";
let discountNumber = parseFloat(discount) / 100;

let finalPrice = basePrice - (basePrice * discountNumber);

console.log(finalPrice);

