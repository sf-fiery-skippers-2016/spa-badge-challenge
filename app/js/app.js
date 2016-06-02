$(document).ready(function() {

  console.log('ready');

  // Save main URL to SPABadges back-end API, since we'll be using it often.
  var baseUrl = "http://spa-badge-api.herokuapp.com";

  // When we load the page, immediately display the list of teachers,
  // linked to their individual pages.
  $.ajax({
    url: baseUrl + '/teachers',
    method: 'GET'
  }).done(function(response) {
    for (i=0;i<response.length;i++) {
      $('#teacher_list').append('<li><a href="' + baseUrl + '/teachers/' + response[i].id + '">' + response[i].name + '</a></li>');
    }
  });

  $('#teacher_list').on('click', 'a', function(event){

    event.preventDefault();

    console.log('clicked on a teacher, this:');
    console.log($(this));
    console.log($(this).attr('href'));

    $.ajax({
      url: $(this).attr('href'),
      method: 'GET'
    }).done(function(response){
      console.log(response);
      console.log(response.name);
      $('#teachers_div').hide();
      // $('#teacher').html('<h1>' + response.name + '</h1>');


      $(function () {
        // Grab the template script
        var theTemplateScript = $("#teacher-template").html();

        // Compile the template
        var theTemplate = Handlebars.compile(theTemplateScript);

        // Define our data object
        var context={
          "teacher": response,
          "badges": response.badges,
        };

        // Pass our data to the template
        var theCompiledHtml = theTemplate(context);

        // Add the compiled html to the page
        $('.content-placeholder').html(theCompiledHtml);
      });

    });
  });

  $('#teacher_div').on('submit', '#add_badge_form', function(event){

    event.preventDefault();

    console.log('clicked add badge');
    console.log('this:');
    console.log(this);
    console.log($(this).serialize());

    var data = JSON.

    // $.ajax({
    //   url: baseUrl + '/badges',
    //   method: 'POST',
    //   data:
    // })

  });

});
