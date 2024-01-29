let arrH = [10, 10, 10, 10, 10];

let sum = arrH.reduce(function (currentSum, currentNumber) {
    return currentSum + currentNumber
})

console.log(sum)