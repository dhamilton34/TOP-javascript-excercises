const ftoc = function(deg) {
  let celsius = Math.round(((deg - 32)*(5/9))*10)/10;
  console.log(celsius)
  return celsius;
}

const ctof = function(deg) {
  let fahrenheit = Math.round(((deg*(9/5)+32))*10)/10;
  console.log(fahrenheit);
  return fahrenheit;
}

module.exports = {
  ftoc,
  ctof
}
