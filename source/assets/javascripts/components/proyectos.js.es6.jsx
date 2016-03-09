const Projects = React.createClass({
  render() {
    projects = this.props.projects.map((stage, index) => {
      return <Project></Project>
    })

    return <section className="proyectos">
      {projects}
    </section>
  }
});
