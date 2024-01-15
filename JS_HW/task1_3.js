let a = Number(prompt('Введите число'));

if (!isNaN(a)) {
  switch (true) {
    case a > 0 && a % 2 === 0:
      alert(`Число ${a} положительное и четное`);
      break;
    case a > 0 && a % 2 !== 0:
      alert(`Число ${a} положительное и нечетное`);
      break;
    case a < 0 && a % 2 === 0:
      alert(`Число ${a} отрицательное и четное`);
      break;
    case a < 0 && a % 2 !== 0:
      alert(`Число ${a} отрицательное и нечетное`);
      break;
    case a === 0:
      alert('Число нулевое');
      break;
    default:
      alert('Неверный ввод');
  }
} else {
  alert('Неверный ввод');
}