$.ready(function(){
  $('a').on('click', function(e){
    e.preventDefault();
    location.hash = "student";
    $.ajax({
      method: "GET",
      url: "http://localhost:3000/student/index"
    }).then(function(response){
      console.log(response);
    })
  });






});
var urlChange = function(){

}
