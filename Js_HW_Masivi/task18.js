let arrC = [3, 6, 7, 9, 0, 33, 44, 21, 43, 50]

let newArrC = []

function chetniyi (arrC) {
    for (let i = 0; i < arrC.length; i++) {
        if (arrC[i] % 2 == 0) {
            newArrC.push(arrC[i])
        }
      }
}

chetniyi(arrC);
console.log(newArrC);