'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Card = (function (_React$Component) {
  _inherits(Card, _React$Component);

  function Card(props) {
    _classCallCheck(this, Card);

    _get(Object.getPrototypeOf(Card.prototype), 'constructor', this).call(this, props);
  }

  _createClass(Card, [{
    key: 'handleClick',
    value: function handleClick() {
      this.props.updateElement(this.props.id);
    }
  }, {
    key: 'render',
    value: function render() {
      var placeholderPath = 'assets/images/icons/';
      var placeholder = placeholderPath + (this.props.active ? 'yes.png' : 'no.png');

      return React.createElement("div", { className: "card " + this.props.classes, onClick: this.handleClick.bind(this) }, React.createElement("div", { className: "card-image" }, React.createElement("img", { src: placeholder, alt: "" })), React.createElement("h4", null, this.props.title), React.createElement("p", null, this.props.description));
    }
  }]);

  return Card;
})(React.Component);

var Cards = (function (_React$Component2) {
  _inherits(Cards, _React$Component2);

  function Cards(props) {
    _classCallCheck(this, Cards);

    _get(Object.getPrototypeOf(Cards.prototype), 'constructor', this).call(this, props);
    console.log("Cards " + JSON.stringify(this.props));
  }

  _createClass(Cards, [{
    key: 'filter',
    value: function filter() {
      return true;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this = this;

      var cards = this.props.elements.map(function (item, index) {
        return React.createElement(Card, {
          title: item.title,
          description: item.description,
          classes: index == _this.props.activeElement ? "selected" : "",
          active: index == _this.props.activeElement,
          key: index,
          id: index,
          updateElement: _this.props.updateElement });
      });

      return React.createElement("div", { className: "cards" }, cards);
    }
  }]);

  return Cards;
})(React.Component);