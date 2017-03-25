var app=(function(){


    var bookRow_old = function(book){
      return "<tr>"+  
             "  <td>"+book.title+"</td>"+
             "  <td>"+book.author+"</td>"+
             "  <td>"+book.price+"</td>"+
             "</tr>";
    };

    var bookRow=function(book){
        return `<tr>
                    <td>${book.title}</td>
                    <td>${book.author}</td>
                    <td>${book.price}</td>
                </tr>`;

    };

    var bookList=new domutils.Writer('books',bookRow);

     return{
         loadBooks:function(){
            // for(var i=0;i<books.length;i++){
            //     bookList.write(books[i]);
            // }

            bookList.write(...books);
         }
     };

})();