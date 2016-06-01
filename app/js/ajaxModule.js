// AJAX WRAPPER MODULE
$.ajax = function(request) {
  var promise = new Promise(function(resolve, reject) {
    function reqListener() {
      console.log(this.responseText);
    }

    var client = new XMLHttpRequest();
    client.open(request.method, request.url)
    client.send()

    client.onload = function() {
      if (this.status >= 200 && this.status < 300) {
        // Performs the function "resolve" when this.status is equal to 2xx
        resolve(this.response);
      } else {
        // Performs the function "reject" when this.status is different than 2xx
        reject(this.statusText);
      }
    };
    client.onerror = function () {
      reject(this.statusText);
    };
  });
  promise.done = promise.then
  promise.fail = promise.catch
  return promise;
}
