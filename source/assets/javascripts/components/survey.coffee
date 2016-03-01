window.Survey = React.createClass
  getInitialState: ->
    active_stage: 0

  componentWillMount: ->
    stages = @props.stages
    stages[@state.active_stage].active = true

    this.setState stages: stages

  render: ->
    React.createElement 'section', className: "survey",
      React.createElement window.Stages, stages: @state.stages
      React.createElement window.Cards, @state.stages[@state.active_stage]
      React.createElement "div", {className: "submit-section"},
        React.createElement window.Button, @state.stages[@state.active_stage]
