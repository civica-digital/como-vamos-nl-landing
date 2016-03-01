window.Stage =  React.createClass
  render: ->
    decoration = [
      React.createElement "div" , className: "bar"
      React.createElement "div" , className: "circle"
    ]

    if @props.active
      decoration[2] = React.createElement "div" , className: "uparrow"

    React.createElement "div",
      className: "stage",
      React.createElement "div",
        className: "stage-progress",
        decoration...

      React.createElement "div",
          className: "stage-name",
          @props.title
