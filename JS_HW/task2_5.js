let month = prompt('Введите месяц:');

let result = (month === 'Декабрь' || month === 'Январь' || month === 'Февраль') ? alert("Зима") : (month === 'Март' || month === 'Апрель' || month === 'Май') ? alert("Весна") : (month === 'Июнь' || month === 'Июль' || month === 'Август') ? alert("Лето") : (month === 'Сентябрь' || month === 'Октябрь' || month === 'Ноябрь') ? alert("Осень") : alert("Ошибка")