let arrN = [
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

let colorBlack = arrN.some(function(arrN)
{
    return arrN.color == "Желтый";
}) ;

console.log(colorBlack)