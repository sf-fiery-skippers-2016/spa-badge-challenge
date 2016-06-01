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
      $('#students').html(listData);
      bindListeners();
    })
  })

  function getListData(obj){
    return new Promise(function(resolve, reject){
      var listData = "";
      var template = Handlebars.compile(studentsIndex);
      var list = JSON.parse(obj);
      list.forEach(function(student){
        var context = {
          id: student.id,
          name: student.name
        }
        var html = template(context)
        listData += html;
      })
      resolve(listData);
    })
  }
}

var studentsIndex = partials().showStudent
var studentBadges = partials().showStudentBadges

function partials(){
  return {
    showStudent: "<div class='student-names'><li id='{{id}}'><a href='student/{{id}}'>{{name}}</a></li></div>\n"
  };
}

function bindListeners(){
  $('a').on('click', function(e){
    e.preventDefault();
    location.hash = this.getAttribute('href');
    $('.boot-badges').getOutDisMoFuckinHouse();
    showStudentBadges({
      url: location.hash,
      _this: this
    });

  });
}

function createShowDiv(){

}

function showStudentBadges(obj){
  $.ajax({
    url: backEnd+obj.url.substring(1),
    method: 'GET'
  }).then(function(response){
    var student = JSON.parse(response)
    console.log(student[0].phrase)
    // adds parent div on click
    var parentElement = document.createElement("DIV");
    parentElement.className = "boot-badges"
    for(var i = 0; i < student.length; i++){
      var newElement = document.createElement("DIV");
      newElement.className = "phrase-" + i
      var text = document.createTextNode(student[i].phrase + "");
      newElement.appendChild(text)
      parentElement.appendChild(newElement)
    }
    obj._this.parentNode.appendChild(parentElement)

  })
}

var backEnd = "http://localhost:3000/";

var urlChange = function(){
  console.log(location.hash);
}


