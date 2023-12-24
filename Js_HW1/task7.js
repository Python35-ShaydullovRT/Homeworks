let hours = Number(prompt('Введите текущее время (часы):'))
let minutes = Number(prompt('Введите текущее время (минуты):'))
let allMinutes = hours *60 + minutes
let minutesInDay = Number(1440)
let minutesToNewDay = minutesInDay-allMinutes

alert(`До следующего дня осталось ${Math.floor(minutesToNewDay/60)} ч. ${minutesToNewDay%60} мин.`);