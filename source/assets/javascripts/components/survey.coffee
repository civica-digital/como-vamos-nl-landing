window.Survey = React.createClass
  getInitialState: ->
    active_stage: 0

  componentWillMount: ->
    stages = @props.stages
    stages[@state.active_stage].active = true

    @setState stages: stages

  manageButton: (e) ->
    console.log e
    new_stage = (@state.active_stage + 1)

    if new_stage isnt @state.stages.length
      @state.stages[@state.active_stage].active = false
      @state.stages[new_stage].active = true

      @setState
        active_stage: new_stage
    else
      window.location = '/evalua'

  shouldComponentUpdate: () ->

    $('html, body').animate(
      {scrollTop: $(".survey").offset().top }, 800)
    true

  render: ->
    button = @state.stages[@state.active_stage]
    button.action = @manageButton

    React.createElement 'section', className: "survey",
      React.createElement window.Stages, stages: @state.stages
      React.createElement window.Cards, @state.stages[@state.active_stage]
        React.createElement "div", {className: "submit-section"},
          React.createElement window.Button, button
