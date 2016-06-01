var $ = function(selector) {

  if (selector[0] === "#") {
    console.log("grabbing id")
    return document.getElementById(selector.substring(1,selector.length))

  } else if (selector[0] === ".") {
    console.log("grabbing classes")
    return document.getElementsByClassName(selector.substring(1,selector.length))[0]

  } else if (selector != document) {
    console.log("grabbing tags")
    return document.getElementsByTagName(selector)[0]

  } else {
    console.log("grabbing the variable you gave")
    return selector
  }
}


