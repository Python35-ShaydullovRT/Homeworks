let g = +(prompt())

function getNumbersArray(g) {
    let numbers = []
    for (var i = 1; i <= g; i++) {
      numbers.push(i)
    }
    return numbers
  }

console.log(getNumbersArray(g))