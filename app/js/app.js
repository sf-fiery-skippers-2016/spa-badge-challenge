/*!
 * app
 */

$.ready(function(){
  var backEnd = "http://localhost:3000/";

  $.ajax({
    url: backEnd + "teachers/1",
    method: "GET"
  }).then(function(response){
    console.log("I'm in the then/response section:")
    console.log(response)
  })


  $('#walker').hide()
  $('#walker').show()

  $('.teacher').on('click', function(){
    var existingTeacherLink = this.outerHTML
    // var existingBadges = "<ul><li>badges</li></ul>"
    var newBadgeForm = "form"
    var that = this
    console.log("This is: " + this)
    // console.log("$This is: " + $(this))
    // this.parentNode.innerHTML = existingTeacherLink + existingBadges + newBadgeForm
    $.ajax({
      url: backEnd + "teachers/1",
      method: "GET"
    }).then(function(response){
      console.log("I'm in the then/response section:")
      console.log(response)

      var badgeList = "<ul>"
      var badges = JSON.parse(response)
      badges.forEach(function(badge) {
        badgeList += "<li>" + badge.phrase + "</li>"
      })
      badgeList += "</ul>"
      that.parentNode.innerHTML = existingTeacherLink + badgeList + newBadgeForm
      })
  })











}) //end document ready
