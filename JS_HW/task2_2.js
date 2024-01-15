let ball = +prompt('Введите ваш балл:');

let result = (ball >= 90 && ball <= 100) ? alert('Отлично') : (ball >= 70 && ball < 90) ? alert('Хорошо') : (ball < 70 && ball > 0) ? alert('Удовлетворительно') : alert('Ошибка')