"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Survey = (function (_React$Component) {
  _inherits(Survey, _React$Component);

  function Survey(props) {
    _classCallCheck(this, Survey);

    _get(Object.getPrototypeOf(Survey.prototype), "constructor", this).call(this, props);
    this.state = {
      active_stage: 0,
      results: []
    };
  }

  _createClass(Survey, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this = this;

      $.getJSON("https://script.google.com/macros/s/AKfycbyZBWk5JINK1ulRLfN8aZS8k9iMDp_1vIj2VKYhnRp-sMNbSleh/exec?resource=ejes").done(function (data) {
        return _this.setState({
          stages: [{
            title: "¿Qué tema te interesa?",
            items: data,
            label: "Avanzar " + String.fromCharCode(8594),
            active: true
          }, {
            title: "¿Cuánto tiempo tienes disponible?",
            items: stagesSurvey,
            label: "Avanzar " + String.fromCharCode(8594)
          }, {
            title: "¿Cómo te gustaría ayudar?",
            items: stagesModalidad,
            label: "Comienza a participar " + String.fromCharCode(8594)
          }] });
      });
    }
  }, {
    key: "isValid",
    value: function isValid() {
      return this.state.results[this.state.active_stage] === undefined;
    }
  }, {
    key: "disabled",
    value: function disabled() {
      if (this.isValid()) return 'disabled';
      return '';
    }
  }, {
    key: "manageButton",
    value: function manageButton(e) {
      new_stage = this.state.active_stage + 1;
      if (this.isValid()) {
        $("#no-option").show().delay(2000).fadeOut(800);
        return;
      }

      if (new_stage !== this.state.stages.length) {
        this.state.stages[this.state.active_stage].active = false;
        this.state.stages[new_stage].active = true;

        this.setState({ active_stage: new_stage });
      } else {
        var queryObj = this.state.results.reduce(function (data, current, index) {
          data[index] = current;
          return data;
        }, {});

        window.location = 'evalua?' + $.param(queryObj);
      }
    }
  }, {
    key: "updateResult",
    value: function updateResult(index) {
      var new_results = this.state.results;
      new_results[this.state.active_stage] = index;
      console.log("update results " + index);
      this.setState({ results: new_results });
    }
  }, {
    key: "getSelectedForStage",
    value: function getSelectedForStage() {
      if (typeof this.state.results[this.state.active_stage] !== "undefined" && this.state.results[this.state.active_stage] !== null) {
        return this.state.results[this.state.active_stage];
      } else {
        return -1;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var display = { display: 'none' };
      if (!this.state.stages) return React.createElement("section", { className: "survey" });

      var button = this.state.stages[this.state.active_stage];

      return React.createElement("section", { className: "survey" }, React.createElement(Stages, { stages: this.state.stages }), React.createElement("section", { id: "no-option", style: display, className: "flash-alert" }, "Selecciona alguna opción antes de avanzar"), React.createElement(Cards, {
        elements: this.state.stages[this.state.active_stage].items,
        activeElement: this.getSelectedForStage(),
        updateElement: this.updateResult.bind(this) }), React.createElement("div", { className: "submit-section" }, React.createElement(Button, {
        disabled: this.disabled.bind(this),
        label: button.label,
        action: this.manageButton.bind(this) })));
    }
  }]);

  return Survey;
})(React.Component);

if (document.getElementById('survey')) React.render(React.createElement(Survey, null), document.getElementById('survey'));