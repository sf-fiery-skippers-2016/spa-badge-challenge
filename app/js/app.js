$.ready(function(){
  loadPage();








});

function loadPage(){
  var students;
  var html;
  $.ajax({
    method: "GET",
    url: backEnd+"student/index"
  }).then(function(response){
    getListData(response).then(function(listData){
      // console.log(listData)
      $('#students').html(listData);
      bindListeners();
    })
  })

  function getListData(obj){
    return new Promise(function(resolve, reject){
      var listData = "";
      var list = JSON.parse(obj);
      list.forEach(function(student){"<div class='student-names'>"
        listData += "<div class='student-names'><li id='"+student.id+"'><a href='student/"+student.id+"'>"+student.name+"</a></li></div>\n";
      })
      resolve(listData);
    })
  }
}

function bindListeners(){
  $('a').on('click', function(e){
    e.preventDefault();
    var clicked = this;
    location.hash = this.getAttribute('href');
    showStudent(location.hash);
  });
}

function showStudent(url){
  $.ajax({
    url: backEnd+url.substring(1),
    method: 'GET'
  }).then(function(response){
    console.log(response);
  })
}

var backEnd = "http://localhost:3000/";

var urlChange = function(){
  console.log(location.hash);
}
