function uppg10() {
  const numbers = [5, 12, 7, 10, 20, 9, 11];

  const bigEven = [];
  const smallOdd = [];
  const other = [];

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];

    if (num > 10 && num % 2 === 0) {
      bigEven.push(num);
    } else if (num < 10 && num % 2 !== 0) {
      smallOdd.push(num);
    } else {
      other.push(num);
    }
  }

  return { bigEven, smallOdd, other };
}

module.exports = { uppg10 };
