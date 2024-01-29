let arrE = [
    {
        "number": 1,
        "color": "Красный"
    },
    {
        "number": 2,
        "color": "Синий"
    },
    {
        "number": 3,
        "color": "Белый"
    },
    {
        "number": 4,
        "color": "Черный"
    }
]

let blackColor = arrE.filter(black => black.color === "Черный");

console.log(blackColor)