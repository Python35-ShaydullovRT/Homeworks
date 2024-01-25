let arrOfBooks = [];

arrOfBooks[0] = {
    name: "Echo",
    author: "Alexander McCall Smith"
}

arrOfBooks[1] = {
    name: "Математическое Проклятие",
    author: "Лейн Смит"
}

arrOfBooks[2] = {
    name: "Современный проповедник и древний текст",
    author: "Сидни Грейданус"
}

function infoAboutBooks (arrOfBooks)
{
    for (let i = 0; i < arrOfBooks.length; i++) {
        console.log(arrOfBooks[i])        
    }
}

infoAboutBooks (arrOfBooks);