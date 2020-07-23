const getTheTitles = function(bookArr) {
    let newArr = bookArr.map(books => books.title);
    return newArr;
}

module.exports = getTheTitles;

//  jasmine getTheTitles.spec.js