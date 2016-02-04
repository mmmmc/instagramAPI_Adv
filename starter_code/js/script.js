// YOUR CODE GOES HERE
var clientID = "b3aca93577762a361363318839281b22";

$(document).ready(function() {
    $('#search-btn').click(function() {
        var userSelection = $('#search-query').val();
        searchFlickr(clientID, userSelection, 10, function(photos) {
            console.log(photos);
            var url=photos.photo[0].url_m;
             var i;
        for (i = 0; i < photos.photo.length; i++){
        $('#search-results').append("<img src="+photos.photo[i].url_m+">");
        } 
        
        $('#reset-btn').click(function(){
            $('#search-results').empty();
            
        })
      
        });
        
    });
});
 