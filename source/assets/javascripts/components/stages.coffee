window.Stages = React.createClass
  render: ->
    stages = @props.stages.map (stage, index) ->
      console.log stage
      React.createElement window.Stage, stage

    React.createElement "div", {className: "bars"}, stages
