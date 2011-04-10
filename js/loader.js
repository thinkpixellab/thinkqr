if (typeof goog != 'undefined') goog.require('Application');

$(document).ready(function(){
  var canvas = $('#appCanvas')[0];
  var input = $('#input')[0];
  window._app = new Application(canvas, input);
});
