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
      var studentsIndex = partials().showStudent
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


function partials(){
  return {
    showStudent: "<div class='student-names'><li id='{{id}}'><a href='student/{{id}}'>{{name}}</a></li></div>\n",

    badgeForm: "<h3> Add a Badge: </h3><form id='add-badge' action='{{url}}' method='post'><input type='hidden' name='student_id' value='{{id}}' /><input type='text' name='content' /><input type='image' src='img/add_button.png' alt='Add Slogan' /></form>"
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
    console.log(student)
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
    showBadgeForm()
    createNewBadgeRequest()
  })
}

var urlChange = function(){
  console.log(location.hash);
}

function showBadgeForm(){
  var badgeForm = partials().badgeForm
  var template = Handlebars.compile(badgeForm);
  var context = {
      id: location.hash.slice(-1),
      url: backEnd+"badge/create/"
    }
  $('.boot-badges').append(template(context));
}

function createNewBadgeRequest(){
  $('#add-badge').on('submit', function(e){
    e.preventDefault();
    var url = this.action;
    var method = this.method;
    var data = new FormData
    data.append("username", "kristal")

  })
}

var backEnd = "http://localhost:3000/";
