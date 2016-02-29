window.Card = React.createClass
  getInitialState: () ->
    selected: ""

  componentWillMount: () ->
    @setState placeholder: @props.placeholder.falsy

  handleClick: () ->
    if @state.selected == ""
      @setState selected: "selected", placeholder: this.props.placeholder.truthy
    else
      @setState selected: "", placeholder: this.props.placeholder.falsy

  render: () ->
    React.createElement("div",
        className: "card " + @state.selected,
        onClick: @handleClick
      React.createElement(
        "div",
        className: "card-image" ,
        React.createElement("img", src: @state.placeholder, alt: "")
      ),
      React.createElement(
        "div",
        className: "card-header",
        @props.title
      ),
      React.createElement(
        "div",
        className: "card-copy",
        React.createElement(
          "p",
          null,
          @props.description
        )
      )
    )
