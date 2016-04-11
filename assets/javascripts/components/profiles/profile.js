'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Profile = (function (_React$Component) {
  _inherits(Profile, _React$Component);

  function Profile(props) {
    _classCallCheck(this, Profile);

    _get(Object.getPrototypeOf(Profile.prototype), 'constructor', this).call(this, props);
  }

  _createClass(Profile, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this = this;

      $.getJSON('https://script.google.com/a/macros/civica.digital/s/AKfycbyZBWk5JINK1ulRLfN8aZS8k9iMDp_1vIj2VKYhnRp-sMNbSleh/exec?resource=components').done(function (data) {
        var component = data.find(function (element) {
          return element.id_component === parseInt(getUrlVars().component);
        });
        console.log(component);
        if (component === null || typeof component === 'undefined') {
          error404("No se encontro el componente de acción solicitado");
        }

        var components = data.filter(function (comp) {
          return component.id_accion == comp.id_accion;
        });

        var activities = [];
        var activity_1 = component.activity_1;
        var activity_2 = component.activity_2;

        if (activity_1 !== null) activities.push({ title: activity_1 });
        if (activity_2 !== null) activities.push({ title: activity_2 });

        $.getJSON('https://script.google.com/a/macros/civica.digital/s/AKfycbyZBWk5JINK1ulRLfN8aZS8k9iMDp_1vIj2VKYhnRp-sMNbSleh/exec?resource=organizations').done(function (data) {
          var organizations = data.filter(function (org) {
            return org.action_ids.indexOf(component.id_accion) !== -1;
          }).map(function (comp) {
            return {
              src: comp.logo,
              href: urlComponent(comp.id),
              title: comp.organization_name
            };
          });

          _this.setState({
            title: component.component,
            description: component.description,
            label: 'Registrarme ' + String.fromCharCode(10140),
            action: function action() {
              return null;
            },
            additional: {
              title: 'Más Información',
              description: component.information
            },
            suscription: {
              title: '¿Sólo quieres mantenerte informado?',
              placeholder: 'Dejanos tu correo para escribirte sobre la acción',
              buttonMsg: 'Enviar'
            },
            organizations: {
              title: 'Coordinan',
              orgs: organizations
            },
            activities: {
              title: '¿Cómo puedes participar?',
              actions: activities
            },
            components: {
              title: 'Otras formas de participar',
              items: components
            }
          });
        });
      });
    }
  }, {
    key: 'buttonAction',
    value: function buttonAction() {
      return;
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.state;

      if (props === null) return React.createElement("div", { className: "Profile" });

      var description = props.additional.description === '' ? '' : React.createElement(Description, {
        title: props.additional.title,
        description: props.additional.description });

      return React.createElement("div", { className: "Profile" }, React.createElement(Resume, {
        title: props.title,
        description: props.description,
        label: props.label,
        action: props.action }), React.createElement("div", { className: "container" }, React.createElement("div", { className: "GroupProfile" }, React.createElement("div", { className: "Content" }, React.createElement(ActionComponentsGroup, {
        title: props.activities.title,
        components: props.activities.actions }), description, React.createElement(SuscriptionMail, React.__spread({}, this.state.suscription, { buttonAction: this.buttonAction.bind(this) }))), React.createElement(RelatedInfo, {
        title: props.organizations.title,
        items: props.organizations.orgs })), React.createElement(RelatedOrganizations, {
        title: props.components.title,
        items: props.components.items })));
    }
  }]);

  return Profile;
})(React.Component);

if (document.getElementById('profile')) {
  React.render(React.createElement(Profile, null), document.getElementById('profile'));
  $('.BoxItems__item label').fitText(1.2);
};
