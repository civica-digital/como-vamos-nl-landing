window.Cards = React.createClass
  getInitialState: () ->
      placeholder: "icons/no.png"
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
        placeholder: @props.placeholder,
        title: item.title,
        description: item.description,
        id: index

    React.createElement "div", className: "cards", cards
