$(document).ready(function(){
  $("#search-icon").click(function(){
    $("#search-icon").hide()
    $("#search-close").slideToggle()
    $("#site-search").slideToggle()
})
  $("#search-close").click(function() {
    $("#search-icon").slideToggle()
    $("#search-close").hide()
    $("#site-search").hide()    
    $("#searchTerm").val("")
    $('#output').html('');
    $("#search-section p").show();
    $("body").removeAttr('style')
  })
})