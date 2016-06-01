// DOM MODULE

HTMLElement.prototype.hide = function() {
  this.setAttribute("style", "display: none");
}

HTMLElement.prototype.show = function() {
  this.setAttribute("style", "display: block");
}

HTMLElement.prototype.addClass = function(newClass) {
  this.setAttribute("class", newClass);
}

HTMLElement.prototype.removeClass = function(oldClass) {
  this.removeAttribute("class", oldClass);
}
