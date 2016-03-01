window.Button = React.createClass
  render: () ->
    React.createElement "button", onClick: @props.action, @props.label
