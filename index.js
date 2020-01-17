$(document).ready(function(){
  $('#searchTerm').keypress(function(e) {
    if(e.which == 13) {
      $("#output").addClass("output");
      var searchTerm = $('#searchTerm').val();
      var url = "https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&generator=prefixsearch&gpssearch=" + searchTerm + "&prop=description|pageimages"   
      
      $.ajax({
        url: url,
        type: "GET",
        async: false,
        dataType: "jsonp",
        success: function(data) {
          $('#output').html('');
          $("body").offset({top: 10})
          $("#search-section p").hide();
          var q_pages = data.query.pages
          var page = 'https://en.wikipedia.org/?curid=';
          $.each(q_pages, function(index, value) {
            $('#output').prepend("<a href= "+ page + value.pageid + " target='blank'><li> <h2>" + value.title + "</h2><p>" + value.description +"</p></li></a>")
          })
        },
        error: function(err){
          alert("err")
        }
      })
    }
  })
})