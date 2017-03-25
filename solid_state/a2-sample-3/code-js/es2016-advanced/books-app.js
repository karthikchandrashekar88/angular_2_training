var app = (function () {


    var books = [{
            title: 'Harry Potter Part 1',
            author: 'J.K.Rowlings',
            price: 160
        },
        {
            title: 'Harry Potter Part 2',
            author: 'J.K.Rowlings',
            price: 260
        },
        {
            title: 'Harry Potter Part 3',
            author: 'J.K.Rowlings',
            price: 360
        },
        {
            title: 'Harry Potter Part 4',
            author: 'J.K.Rowlings',
            price: 400
        },
        {
            title: 'Harry Potter Part 5',
            author: 'J.K.Rowlings',
            price: 440
        },
        {
            title: 'Harry Potter Part 6',
            author: 'J.K.Rowlings',
            price: 460
        },
        {
            title: 'Harry Potter Part 7',
            author: 'J.K.Rowlings',
            price: 480
        },
        {
            title: 'Shiva Trilogy Part 1',
            author: 'Amish',
            price: 260
        },
        {
            title: 'Shiva Trilogy Part 2',
            author: 'Amish',
            price: 220
        },
        {
            title: 'Shiva Trilogy Part 3',
            author: 'Amish',
            price: 410
        },

    ];



    var getByAuthor = function(authorName){
        var result=[];

        for(let book of books){
            if(book.author.toLowerCase()===authorName.toLowerCase())
                result.push(book);
        }

        return result;
    };
var bookRow=function(book){
        return `<tr>
                    <td>${book.title}</td>
                    <td>${book.author}</td>
                    <td>${book.price}</td>
                </tr>`;

    };
    var searchBox=new domutils.Input('search');
    var bookList=new domutils.Writer('books',bookRow);

    return {

        searchByAuthor:function(){
            var author=searchBox.get();
            var result=getByAuthor(author);
            bookList.clear();
            bookList.write(...result);
        }

    };


})();