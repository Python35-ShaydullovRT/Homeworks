let numberOne = Number(prompt('Введите первое число:'))
let numberTwo = Number(prompt('Введите второе число:'))
let znak = prompt('Введите знак:')
let res = 0

switch (znak) {
 case '+':
    res = (numberOne+numberTwo);
    break;
 case '-':
    res = (numberOne-numberTwo);
    break;
 case '*':
    res = (numberOne*numberTwo);
    break;
 case '/':
    res = (numberOne/numberTwo);
    break;
 default:
    alert( "Нет таких значений" );
}
alert(`${numberOne} ${znak} ${numberTwo} = ${res}`)