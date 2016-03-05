window.projects = React.createClass
  render: () ->
    projects = @props.projects.map (project, index) ->
      React.createElement window.project, project

    React.createElement "section",
      { className: "proyectos" },
      projects
