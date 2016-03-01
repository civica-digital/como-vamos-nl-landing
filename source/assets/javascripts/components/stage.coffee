window.Stage =  React.createClass
  render: ->
    decoration = []

    if @props.active
      decoration[0] = React.createElement "div" , className: "bar"
      decoration[1] = React.createElement "div" , className: "circle active"
      decoration[2] = React.createElement "div" , className: "circle active shadow"
      decoration[3] = React.createElement "div" , className: "uparrow"
    else
      decoration[0] = React.createElement "div" , className: "bar"
      decoration[1] = React.createElement "div" , className: "circle"


    React.createElement "div",
      className: "stage",
      React.createElement "div",
        className: "stage-progress",
        decoration...

      React.createElement "div",
          className: "stage-name",
          @props.title
