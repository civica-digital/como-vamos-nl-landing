var Project = React.createClass({displayName: "Project",
  render: function() {
    return (
      React.createElement("div", {className: "project"}, 
        React.createElement("header", null, 
          React.createElement("h4", null,  this.props.projectName)
        ), 
        React.createElement("div", {className: "project-body"}, 
          React.createElement("p", null,  this.props.projectDescription), 
          React.createElement("a", {href: urlComponent(this.props.ProjectID)}, 
            React.createElement("button", {type: "button"}, "Participa")
          )
        )
      )
    );
  }
});

var ProjectGroup = React.createClass({displayName: "ProjectGroup",
  render: function() {
    var projects = this.props.projects.map(function(project, index){
      return (
        React.createElement(Project, {
          key:  index, 
          ProjectID:  project.id_component, 
          projectName:  project.component, 
          projectDescription:  project.description}
        )
      );
    });

    return (
      React.createElement("section", {className: "projects"}, 
        React.createElement("div", {className: "container"}, 
           projects 
        )
      )
    );
  }
});
