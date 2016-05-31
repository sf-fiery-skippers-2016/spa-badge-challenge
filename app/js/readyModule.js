// ADD READY FUNCTIONALITY
HTMLDocument.prototype.ready = function(callback) {
  if (this.readyState) {
    console.log('Document is ready');
    callback()
  } else {
    this.ready()
    console.log('Document isn\'t loading!')
  }
}
