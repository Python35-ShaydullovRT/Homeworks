let day = prompt('Введите день:');

switch (day.toLowerCase()) {
    case 'понедельник':
    case 'вторник':
    case 'среда':
    case 'четверг':
    case 'пятница':
        alert('Будний');
        break;
    case 'суббота':
    case 'воскресенье':
        alert('Выходной');
        break;
    default:
        alert("Нет таких значений");
}