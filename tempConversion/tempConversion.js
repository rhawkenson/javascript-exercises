const ftoc = function(num) {
  temp = (num-32)/1.8;
  return Number(temp.toFixed(1));
}

const ctof = function(num) {
  temp = (num*1.8)+32;
  return Number(temp.toFixed(1));
}

module.exports = {
  ftoc,
  ctof
}
