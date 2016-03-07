window.Cards = React.createClass
  getInitialState: () ->
    items: []

  filter: () -> true

  componentDidMount: () ->
    @filter = @props.filter if @props.filter?

    if typeof @props.urlApi == 'object'
      @setState items: @props.urlApi
    else
      $.getJSON(@props.urlApi)
        .done (data) =>
          @setState items: data.filter(@filter)
        .fail (err) ->
          console.log "error #{err}"

    true

  componentWillReceiveProps: (nextProps) ->
    @state.items = []
    @filter = nextProps.filter if nextProps.filter?

    if typeof nextProps.urlApi == 'object'
      @setState items: nextProps.urlApi
    else
      $.getJSON(nextProps.urlApi)
        .done (data) =>
          @setState items: data.filter(@filter)
        .fail (err) ->
          console.log "error #{err}"
    true

  render: () ->
    cards = @state.items.map (item, index) =>
      React.createElement window.Card,
        title: item.title,
        description: item.description,
        id: index

    React.createElement "div", className: "cards", cards
