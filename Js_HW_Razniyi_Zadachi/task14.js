let arrSum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function sum(arrSum) {
    let sum = 0;
    for (let number of arrSum) {
      sum += number;
    }
    return sum;
};


console.log(sum(arrSum));