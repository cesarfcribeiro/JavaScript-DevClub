// Calcula Desconto:
// Todos os Produtos acima de R$ 30,00 têm desconto de 10%.

const cart = [10, 244, 99, 2, 20, 33, 250];
let finalValueWithDiscount = 0;
let finalValue = 0;

function calculateDiscount(price, discountPercent) {
  return price * (discountPercent / 100);
}

cart.forEach((value) => {
  finalValue += value;

  if (value > 30) {
    const discount = calculateDiscount(value, 10);
    finalValueWithDiscount += value - discount;
  } else {
    finalValueWithDiscount += value;
  }
});

const finalDiscount = finalValue - finalValueWithDiscount;

console.log(`O valor final da compra foi de R$ ${finalValue.toFixed(2)}.\n` + `Porém você teve desconto e irá pagar apenas R$ ${finalValueWithDiscount.toFixed(2)}.\n` + `Você economizou R$ ${finalDiscount.toFixed(2)}.`);
