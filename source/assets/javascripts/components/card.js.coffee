window.Card = React.createClass
  getInitialState: () ->
    selected: ""
    placeholder:
      truthy: "assets/images/icons/yes.png",
      falsy: "assets/images/icons/no.png"
    actual_placeholder: "assets/images/icons/no.png"

  componentWillMount: () ->
    placeholder = {}

    if typeof @props.placeholder isnt undefined and @props.placeholder?
      ["truthy", "falsy", "actual_placeholder"].map (field) ->
        if @props.placeholder[field]?
          placeholder[field] = @props.placeholder[field]

      if Object.keys(placeholder).length is 0
        @setState placeholder

  handleClick: () ->
    if @state.selected == ""
      @setState
        selected: "selected"
        actual_placeholder: @state.placeholder.truthy
    else
      @setState
        selected: ""
        actual_placeholder: @state.placeholder.falsy

  render: () ->
    React.createElement("div",
        className: "card " + @state.selected,
        onClick: @handleClick
      React.createElement(
        "div",
        className: "card-image" ,
        React.createElement("img", src: @state.actual_placeholder, alt: "")
      ),
      React.createElement(
        "h4",
        [],
        @props.title
      ),
      React.createElement(
        "p",
        [],
        null,
        @props.description
      )
    )
