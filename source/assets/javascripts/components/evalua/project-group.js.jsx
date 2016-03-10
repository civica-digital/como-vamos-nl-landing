var Project = React.createClass({
  render: function() {
    return (
      <div className="project">
        <header>
          <h4>{ this.props.projectName }</h4>
        </header>
        <div className="project-body">
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
      <section className="projects">
        <div className="container">
          { projects }
        </div>
      </section>
    );
  }
});
