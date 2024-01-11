let language = prompt('Введите язык:');

let result = (language === 'английский' || language === 'Английский') ? alert("Hello") : (language === 'французкий' || language === 'Французкий') ? alert("Bonjour") : alert("Ошибка")