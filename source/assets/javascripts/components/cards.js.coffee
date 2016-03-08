window.Cards = React.createClass
  getInitialState: () ->
    items: []

  filter: () -> true

  componentDidMount: () ->
    @filter = @props.filter if @props.filter?

    if typeof @props.urlApi == 'object'
      @setState items: @props.elements.urlApi
    else
      $.getJSON(@props.elements.urlApi)
        .done (data) =>
          @setState items: data.filter(@filter)
        .fail (err) ->
          console.log "error #{JSON.stringify err}"

    true

  componentWillReceiveProps: (nextProps) ->
    @state.items = []
    @filter = nextProps.filter if nextProps.filter?

    if typeof nextProps.elements.urlApi == 'object'
      @setState items: nextProps.elements.urlApi
    else
      $.getJSON(nextProps.elements.urlApi)
        .done (data) =>
          @setState items: data.filter(@filter)
        .fail (err) ->
          console.log "error #{JSON.stringify err}"
    true

  render: () ->
    cards = @state.items.map (item, index) =>
      React.createElement window.Card,
        title: item.title,
        description: item.description,
        classes: if index == @props.activeElement then "selected" else ""
        active: index == @props.activelement
        id: index
        updateElement: this.props.updateElement
    React.createElement "div", className: "cards", cards
