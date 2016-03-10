var Project = React.createClass({
  render: function() {
    return (
      <div>
        <div>
          <p>{ this.props.projectName }</p>
        </div>
        <div>
          <p>{ this.props.projectDescription }</p>
          <button>Participa</button>
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
          projectName={ project.component }
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
