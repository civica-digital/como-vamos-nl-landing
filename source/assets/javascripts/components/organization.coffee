window.organization = React.createClass
  render: ->
    React.createElement 'div', null,
      React.createElement('div', null,
        React.createElement('img', src: 'assets/images/icons/citizen.png')),
      React.createElement('div',
        null,
        React.createElement('p', null, @props.organization.organization_name))
