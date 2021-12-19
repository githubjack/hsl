// Crosssell.js
/*$("button").on('click', function() {
    $.getJSON( "courses.json", function(obj) {
        $.each(obj, function(key, value) {
           $("ul").append("<li>"+value.ThumbnailUrl+"</li>"); 
        });
    } );
});
*/
$.ajax({
    url: 'http://localhost:5500/assets/js/courses.json', 
    type: 'GET',
    success: function(data){
        $.each(data, function(key, value) {
            $("div").append("<img src="+value.ThumbnailUrl+" />" +
            "<div>"+value.Id+"</div>" +  // course id
            "<div class='course-title'>"+value.Title+"</div>" + 
            "<div class='course-info'>"+value.Description+"</div>" +
            "<div class='info-link'>" +value.InfoUrl+"</div>" +
            "<button>Add to Cart</button><button>More Info</button>"
        );
        console.log(data);
    });
    },
});