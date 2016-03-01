window.Cards = React.createClass
  getInitialState: () ->
    items: []

  filter: () -> true

  componentDidMount: () ->
    @filter = @props.filter if @props.filter?

    $.getJSON(@props.urlApi)
      .done (data) =>
        @setState items: data.filter(@filter)
      .fail (err) ->
        console.log "error #{err}"

  render: () ->
    cards = @state.items.map (item, index) =>
      React.createElement window.Card,
        title: item.title,
        description: item.description,
        id: index

    React.createElement "div", className: "cards", cards
