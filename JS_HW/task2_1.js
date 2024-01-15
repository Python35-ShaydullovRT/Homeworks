let numberOne = +prompt('Введите 1 число:');
let numberTwo = +prompt('Введите 2 число:');

let result = (numberOne > numberTwo) ? alert(`${numberOne}, больше чем ${numberTwo}`) : (numberTwo > numberOne) ? alert(`${numberTwo}, больше чем ${numberOne}`) : (numberTwo = numberOne) ? alert(`${numberOne} = ${numberTwo}`) : alert(`Ошибка`)