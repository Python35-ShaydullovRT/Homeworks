let arr8 = [1, 2, 3, 4, 5, 6]

function xTwo (arr8) 
{
    for (let i = 0; i < arr8.length; i++) {
        arr8[i] = arr8[i] * 2;
    }
    return arr8;
}

xTwo (arr8);
console.log(arr8);