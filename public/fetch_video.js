$(document).ready(function() {

  $("#user-submit").click(function() {
    ajaxCall();
  });

  $('#text-field').keypress(function(e){
    if(e.which == 13){
      e.preventDefault();
      e.stopPropagation();

      ajaxCall();
    }
  });
});

function ajaxCall() {
  var searchTerm = $('#text-field').val();

  $.get('/widget', { search_keyword: searchTerm }, function (data) {
    $('#ytplayer').remove();
    $('#search-results').append(data);
  })
}
