let arrA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let newArrA = []

function chetniyi (arrA) {
    for (let i = 0; i < arrA.length; i++) {
        if (arrA[i] % 2 == 0) {
            newArrA.push(arrA[i])
        }
      }
}

chetniyi(arrA);
console.log(newArrA);