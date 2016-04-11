'use strict';

var urlComponent = function urlComponent(id) {
  return '/profile?component=' + id;
};

var error404 = function error404(msg) {
  var query = $.param({ msg: msg });
  window.location.replace('/404?' + query);
};