'use strict';

function BinarioADecimal(num) {
  // tu codigo aca
  let res = 0;
  let pos = 0;
  for (let i = num.length - 1; i >= 0; i--) {
    res += num[pos] * Math.pow(2, i);
    pos++;
  }
  return res;
}

function DecimalABinario(num) {
  // tu codigo aca
  let bin = [];

  while (num / 2 !== 0) {
    bin.unshift(num % 2);
    num = Math.floor(num / 2);
  }
  return bin.join('');
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
