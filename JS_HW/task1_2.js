let age = Number(prompt('Введите свой возраст:'));

if (age < 18) {
    alert( 'Вы несовершеннолетний' );
  } else if (age >= 18 && age <= 65) {
    alert( 'Вы взрослый' );
  } else {
    alert( 'Вы пожилой человек' );
  }