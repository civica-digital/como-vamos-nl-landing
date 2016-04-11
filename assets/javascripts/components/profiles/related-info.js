"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageLabel = (function (_React$Component) {
  _inherits(ImageLabel, _React$Component);

  function ImageLabel(props) {
    _classCallCheck(this, ImageLabel);

    _get(Object.getPrototypeOf(ImageLabel.prototype), "constructor", this).call(this, props);
  }

  _createClass(ImageLabel, [{
    key: "render",
    value: function render() {
      var _props = this.props;
      var href = _props.href;
      var src = _props.src;
      var title = _props.title;

      return React.createElement("li", { className: "BoxItems__item" }, React.createElement("a", { href: href }, React.createElement("img", { src: src }), React.createElement("label", null, title)));
    }
  }]);

  return ImageLabel;
})(React.Component);

var ImageLabelGroup = (function (_React$Component2) {
  _inherits(ImageLabelGroup, _React$Component2);

  function ImageLabelGroup(props) {
    _classCallCheck(this, ImageLabelGroup);

    _get(Object.getPrototypeOf(ImageLabelGroup.prototype), "constructor", this).call(this, props);
  }

  _createClass(ImageLabelGroup, [{
    key: "render",
    value: function render() {
      return React.createElement("ul", { className: "BoxItems__items" }, this.props.items.map(function (item) {
        return React.createElement(ImageLabel, React.__spread({}, item));
      }));
    }
  }]);

  return ImageLabelGroup;
})(React.Component);

var RelatedInfo = (function (_React$Component3) {
  _inherits(RelatedInfo, _React$Component3);

  function RelatedInfo(props) {
    _classCallCheck(this, RelatedInfo);

    _get(Object.getPrototypeOf(RelatedInfo.prototype), "constructor", this).call(this, props);
  }

  _createClass(RelatedInfo, [{
    key: "render",
    value: function render() {
      return React.createElement("div", { className: "RelatedContent" }, React.createElement("div", { className: "BoxItemsCoordination" }, React.createElement("label", { className: "BoxItems__title" }, this.props.title), React.createElement(ImageLabelGroup, React.__spread({}, this.props))));
    }
  }]);

  return RelatedInfo;
})(React.Component);