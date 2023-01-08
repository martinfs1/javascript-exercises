const getTheTitles = function(books) {
    let titlesBooks = [];
    books.forEach( object => {
     titlesBooks.push(object.title);
    })
    return titlesBooks;
};

// Do not edit below this line
module.exports = getTheTitles;
