let arrY = [
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

let colorBlack = arrY.find(function(arrY)
{
    return arrY.color == "Черный";
}) ;

console.log(colorBlack)