// EVENT DISPATCHER MODULE
// No no no... custom events... bad.
HTMLElement.prototype.onAndTrigger = function(event, action) {
  this.addEventListener(event, action)
}
