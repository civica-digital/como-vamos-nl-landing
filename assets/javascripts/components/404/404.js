"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Error404 = (function (_React$Component) {
  _inherits(Error404, _React$Component);

  function Error404(props) {
    _classCallCheck(this, Error404);

    _get(Object.getPrototypeOf(Error404.prototype), "constructor", this).call(this, props);
  }

  _createClass(Error404, [{
    key: "render",
    value: function render() {
      var _getUrlVars = getUrlVars();

      var msg = _getUrlVars.msg;

      if (typeof msg === "undefined") msg = 'El recurso que estas buscando no fue encontrado';

      return React.createElement("div", { className: "container" }, React.createElement("img", { src: "assets/images/illustrations/404.png" }), React.createElement("p", null, msg.replace(/\+/g, ' ')));
    }
  }]);

  return Error404;
})(React.Component);

if (document.getElementById('error404')) {
  React.render(React.createElement(Error404, null), document.getElementById('error404'));
};
