let arrOne = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function addToArr (arrOne)
{
    arrOne.push(10);

    for(let i = 0; i < arrOne.length; i++ )
    {
        console.log(arrOne[i]+'!')
    }
}

addToArr(arrOne);