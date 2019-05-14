$(document).ready(function() {

  var api = "https://en.wikipedia.org/w/api.php?action=opensearch&search="

  // random wikipedia
  $("#randomWiki").click(function() {
    location.href = "https://en.wikipedia.org/wiki/Special:Random";
  });

  $("#request").click(function() {
    var search = $("#search").val();
    var urlString = api + search + "&format=json&callback=?";
    $.ajax({
      type: "GET",
      url: urlString,
      async: false,
      dataType: "json",
      success: function(data) {
        $("#result").html("");
        for (var i = 0; i < data[1].length; i++) {
          $("#result").prepend("<a href=" + data[3][i] + ">" + data[1][i] + "</a><p>" + data[2][i] + "</p>");
        }
      },
      error: function(errorMessage) {
        alert("Error")
      }
    });
  })
});
