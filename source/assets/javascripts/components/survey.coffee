window.Survey = React.createClass
  render: ->
    React.createElement 'section', className: "survey",
      React.createElement window.Stages, @props.stages
      React.createElement window.Cards, @props.cards
      React.createElement "div", {className: "submit-section"},
        React.createElement window.Button, @props.button
