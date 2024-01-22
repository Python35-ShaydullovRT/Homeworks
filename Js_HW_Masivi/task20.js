let arr20 = [-1, -2, 4, 5, -6, -10];
let newArr20 = []

function minus (arr20)
{
    for (let i = 0; i < arr20.length; i++) {
        if (arr20[i] < 0) {
            newArr20.push(arr20[i]);
        }
    }

    a = newArr20.length
}

minus (arr20);
console.log (a);