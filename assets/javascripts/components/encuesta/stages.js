"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Stage = (function (_React$Component) {
  _inherits(Stage, _React$Component);

  function Stage(props) {
    _classCallCheck(this, Stage);

    _get(Object.getPrototypeOf(Stage.prototype), "constructor", this).call(this, props);
  }

  _createClass(Stage, [{
    key: "render",
    value: function render() {
      var decoration = [];

      if (this.props.active) {
        decoration[0] = React.createElement("div", { className: "bar" });
        decoration[1] = React.createElement("div", { className: "circle active" });
        decoration[2] = React.createElement("div", { className: "circle active shadow" });
        decoration[3] = React.createElement("div", { className: "uparrow" });
      } else {
        decoration[0] = React.createElement("div", { className: "bar" });
        decoration[1] = React.createElement("div", { className: "circle" });
      }

      // concat classes depending con props info
      var stageNameClasses = 'stage-name' + (this.props.active ? ' active' : '');

      return React.createElement("div", { className: "stage" }, React.createElement("div", { className: "stage-progress" }, decoration), React.createElement("div", { className: stageNameClasses }, this.props.title));
    }
  }]);

  return Stage;
})(React.Component);

var Stages = (function (_React$Component2) {
  _inherits(Stages, _React$Component2);

  function Stages(props) {
    _classCallCheck(this, Stages);

    _get(Object.getPrototypeOf(Stages.prototype), "constructor", this).call(this, props);
  }

  _createClass(Stages, [{
    key: "render",
    value: function render() {
      stages = this.props.stages.map(function (stage, index) {
        return React.createElement(Stage, { title: stage.title, key: index, active: stage.active });
      });

      return React.createElement("div", { className: "bars" }, stages);
    }
  }]);

  return Stages;
})(React.Component);