/*!
 * minQuery
 */

// Find element(s) by id, class, or tag.
//
// Usage:
//  Find an element by id: select('#foo');
//  Find an element by class: select('.foo');
//  Find an element by tag: select('foo');
var miniQuery = (function() {

  var privateSelect = function( target ) {

    // Starts with a #, look for an id.
    if (target[0] === '#') {
      return document.getElementById(target.substr(1));
    } else

    // Starts with a . (period), look for a class.
    if (target[0] === '.') {
      return document.getElementsByClassName(target.substr(1));
    }

    // Otherwise, assume looking for a tag.
    else {
      return document.getElementsByTagName(target);
    }

    // We didn't find anything
    return null;

  }

  return {

    select: function( target ) {
      return privateSelect( target );
    },

    DOM: (function() {

      // Private methods

      var changeHideShow = function( target, action ) {

        display = ( action === 'hide' ) ? 'none' : 'block';

        // Try to get the element.
        elements = privateSelect(target);

        // We actually got an element.
        if (elements) {

          // It's a 'div', so it's just a simple object.
          if (target[0] === '#') {
            elements.style.display = display;

          // Else it's an array (of classes or tags).
          } else {
            for (i=0;i<elements.length;i++) {
              elements[i].style.display = display;
            }
          }
        }

      };

      var add = function( element, changeClass ) {
        if (!element.classList.contains(changeClass)) {
          element.classList.add(changeClass);
        }
      };

      var remove = function( element, changeClass ) {
        if (element.classList.contains(changeClass)) {
          element.classList.remove(changeClass);
        }
      };

      var changeClass = function(target, elements, changeClass, action) {
        if (target[0] === '#') {
          action(elements, changeClass);
        } else {
          for (i=0;i<elements.length;i++) {
            action(elements[i], changeClass);
          }
        }

      };

      // Public methods

      return {

        // Hide the element on the page.
        hide: function( target ) {

          changeHideShow( target, 'hide' );

        },

        show: function( target ) {

          changeHideShow( target, 'show' );

        },

        addClass: function( target, newClass ) {
          elements = privateSelect( target );

          if (elements) {
            changeClass( target, elements, newClass, add );
          }
        },

        removeClass: function( target, removeClass ) {
          elements = privateSelect( target );

          if (elements) {
            changeClass( target, elements, removeClass, remove );
          }
        }

      };

    }) (),

    EventDispatcher: (function() {

      var registeredEvents = {};

      return {

        on: function( target, event, action ) {

          var newEvent = new CustomEvent(event);
          registeredEvents[event] = newEvent;

          var elements = privateSelect(target);
          if (!elements.length) { elements = new Array(elements) }
          console.log(elements.length);
          for (i=0;i<elements.length;i++) {
            elements[i].addEventListener(event, action, false);
          }

        },

        trigger: function( target, event ) {

          var theEvent = registeredEvents[event];
          var elements = privateSelect(target);
          if (!elements.length) { elements = new Array(elements) }
          for (i=0;i<elements.length;i++) {
            elements[i].dispatchEvent(theEvent);
          }

        }

      }

    }) (),

    AjaxWrapper: (function() {

      return {

        // Method that performs the ajax request.
        request: function(argsHash) {

          // Create a Promise
          var promise = new Promise(function(resolve,reject) {

            // Instantiate an XMLHttpRequest
            var xhr = new XMLHttpRequest();

            xhr.open(argsHash.type, argsHash.url)
            // console.log('after open, before send, xhr:');
            // console.log(xhr);
            xhr.send();

            xhr.onload = function() {
              if (this.status >= 200 && this.status < 300) {
                // Success codes 2XX, perform 'resolve' function.
                // console.log('before resolve this.response:');
                // console.log(this.response);
                resolve(this.response);
              } else {
                // Failure codes (not 2XX), perform 'reject' function.
                // console.log('before reject this.response:');
                // console.log(this.statusText);
                reject(this.statusText);
              }
            };

            xhr.onerror = function() {
              reject(this.statusText);
            };

          });

          promise.done = promise.then;
          promise.fail = promise.catch;

          return promise;

        }

      };

    }) (),

    ready: function(action) {
      switch (document.readyState) {
        case 'loading':
          document.addEventListener("DOMContentLoaded", action);
          break;
        case 'complete':
          action();
      }
    }

  }

}) ();

var $ = miniQuery;
