// Crosssell.js

/* $.ajax({
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
}); */


$.ajax({
    url: 'http://localhost:5500/assets/js/courses.json', 
    type: 'GET',
    success: function(data){
        var course_data = '';
        $.each(data, function(key, value){
            course_data += '<div class="item">'
            course_data += '<img src='+value.ThumbnailUrl+ ' />';
            course_data += '<div class="title">'+value.Title+'</div>';
            course_data += '<div class="description">'+value.Description+'</div>';
            course_data += '<div class="info-url">'+value.InfoUrl+'</div>';
            course_data += '<button class="basket">'+ 'Add to Basket' +'</button>';
            course_data += '<button class="more-info">'+ 'More Info' +'</button>';
            course_data += '</div>';
        });
        $('#course').append(course_data);
    }
})

// to dos
// add event listeners 
// create a modal
// add ore js to interrogate that json for cross sell