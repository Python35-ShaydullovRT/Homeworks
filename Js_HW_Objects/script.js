let car = {
    manufacturer: 'LADA',
    year: 2024,
    color: 'white'
};

car.color = 'black';

car.startEngine = function() {
    alert("Двигатель запущен");
  };


let user = {
  name: 'Maksim',
  age: 30,
  addres: 'Donskaya Avenu'
};

user.age = 31;
user.addres = 'Moskovskaya Street';

let nameUser = Object.keys(user);

console.log(nameUser)

let book = {
    name: 'Harry Potter',
    author: 'Joanne Rowling',
    yearOfRealese: 2000
  };

console.log(book)

let animal = {
};

animal.doSound = function() {
  alert("Мяу");
};

let product = {
  name: 'pen',
  cost: 10,
  amount: 1
}

product.amount += 5;

let computer = {
};

computer.turnOn = function() {
  alert("Компьютер включен");
};

let fruct = {
};

fruct.cleanOut = function() {
  alert("Фрукт очищен");
};

let city = {
  name: 'Sochi',
  population: 445000,
  country: 'Russia'
}