$(document).ready(function(){

  var url = "http://spa-badge-api.herokuapp.com"


  $.ajax({
    url: url + "/teachers",
    method: "GET"
  }).done(function(response){
    for(var i = 0; i< response.length; i++){
      var id = response[i].id
      var name = response[i].name
      $(".teachers").append("<li><a href=" + url + "/teachers/" + id + ">" + name + "</a></li><button id=\"button" + response[i].id + "\"type=\"button\">Add a new badge</button>");
    }
  });

  $(".teachers").on("click", "a", function(e){
    e.preventDefault();
    $.ajax({
      url: $(this).attr("href"),
      method: "GET"
    }).done(function(response){
      console.log(response)
      var theTemplateScript = $("#badge-template").html();
      // Compile the template
      var theTemplate = Handlebars.compile(theTemplateScript);
        var context={
          badges: response.badges,
          teacher: response.id
      }
      // Pass our data to the template
      var theCompiledHtml = theTemplate(context);
      // Add the compiled html to the page
      $('.content-placeholder').html(theCompiledHtml);
    })
  })

  $(document).on("click", "button", function(){
    $(document).find("#add-badge").show()
    console.log(this)
  })

  $(document).on("submit", "#add-badge", function(e){
    event.preventDefault();
    $.ajax({
      url: url + "/badges",
      method: $(this).attr("method"),
      data:
    }).done(function(response){
      console.log(response)
    })
  })
})