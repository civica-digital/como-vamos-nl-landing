var Project = React.createClass({
  render: function() {
    return (
      <div>
        <div>
          <p>{ this.props.projectName }</p>
        </div>
        <div>
          <p>{ this.props.projectDescription }</p>
          <button>Participar</button>
        </div>
      </div>
    );
  }
});

var ProjectGroup = React.createClass({
  render: function() {
    var projects = this.props.projects.map(function(project, index){
      return (
        <Project
          key={ index }
          projectName={ project.name }
          projectDescription={ project.description }
        />
      );
    });

    return (
      <section className="proyectos">
        { projects }
      </section>
    );
  }
});
