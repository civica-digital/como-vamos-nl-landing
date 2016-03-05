
window.project = React.createClass(
  displayName: 'project'
  render: ->
    React.createElement 'div', null,
      React.createElement('div', null,
        React.createElement('h1', null, @props.component))
      React.createElement('div', null,
        React.createElement('p', null,
        @props.description),
        React.createElement('img', src: 'assets/images/icons/citizen.png'),
        React.createElement('button', null, 'Participar'))
)
