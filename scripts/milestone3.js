// All JavaScript source code regarding milestone 3
function openLibrary() {
    $(document).ready(function(){
        var url = "https://www.googleapis.com/books/v1/users/101130678356918966260/bookshelves/1001/volumes";
        $.getJSON (url, function(json){				
            $.each(json.items, function(){
                $('#collection').append('<h2> <a href = "Milestone 2 Book Details.html?id='+ this.id +'">' 
                + this.volumeInfo.title  +'</a></h2>'  
                +'<img src="' + this.volumeInfo.imageLinks.thumbnail + '>' 
                + '<p style = "clear: both"</p>');
            });
        });
    });
}

// onSubmit 
$(document).ready(function(){
    $("#m3Form").submit(function(){
        var search = $("#bookSearch").val();

        if(search == ''){
            alert("Please Enter a Book");
        } else {
            var url = '';
            var img = '';
            var title = '';
            var author = '';
            $.get("https://www.googleapis.com/books/v1/volumes?q=" + search, function(response){
                for(i = 0; i < response.items.length; i++){
                    title = $('<h3> <a href=' + response.items[i].volumeInfo.infoLink + '>' + response.items[i].volumeInfo.title + '</a></h3>');
                    author = $('<br><h5 style="color:white">' + response.items[i].volumeInfo.authors + '</h5>');
                    img = $('<img><br> <a href =' + response.items[i].volumeInfo.infoLink + '></img>');
                    url = response.items[i].volumeInfo.imageLinks.thumbnail;

                    img.attr('src', url);
                    img.appendTo("#result");
                    author.appendTo("#result");
                    title.appendTo("#result");
                    
                }
            });
        }
        return false;
    });
});

