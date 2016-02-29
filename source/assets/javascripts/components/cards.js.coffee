window.Cards = React.createClass
  getInitialState: () ->
      placeholder: "icons/no.png"
      items: []

  filter: () -> true

  componentDidMount: () ->
    _this = @

    if (@props.filter != undefined and @props.filter != null)
      @filter = @props.filter

    $.getJSON(@props.urlApi)
      .done (data) ->
        _this.setState items: data.filter(_this.filter)
      .fail (err) ->
        console.log("error " + err);

  render: () ->
    _this = @

    cards = @state.items.map (item, index) ->
      React.createElement window.Card,
        placeholder: _this.props.placeholder,
        title: item.title,
        description: item.description,
        id: index

    React.createElement "div", className: "cards", cards
