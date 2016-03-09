var Evaluate = React.createClass({
  getInitialState: function() {
    return {
      projects: [],
      organizations: []
    };
  },
  componentDidMount: function() {
    // aquí vamos a cargar los datos de forma dinámica
    // basados en parámetros y llamadas a endpoints
    // .ajax.done(self.setState({ projects: res.data.projects })).bind(this)
    var self = this;
    this.setState({
      projects: [
        { name: '¿Qué es CVNL? 1', description: 'Cómo Vamos Nuevo León (CVNL) es una plataforma que tiene como objetivo incorporar una agenda' },
        { name: '¿Qué es CVNL? 2', description: 'Cómo Vamos Nuevo León (CVNL) es una plataforma que tiene como objetivo incorporar una agenda' },
        { name: '¿Qué es CVNL? 3', description: 'Cómo Vamos Nuevo León (CVNL) es una plataforma que tiene como objetivo incorporar una agenda' },
        { name: '¿Qué es CVNL? 4', description: 'Cómo Vamos Nuevo León (CVNL) es una plataforma que tiene como objetivo incorporar una agenda' }
      ],
      organizations: [
        { name: 'Academia Nacional de Arquitectura 1', image: 'assets/images/icons/citizen.png'},
        { name: 'Academia Nacional de Arquitectura 2', image: 'assets/images/icons/citizen.png'}
      ]
    });
  },
  render: function() {
    return (
      <div>
        <section className="survey-navbar">
          <Bar />
        </section>

        <ProjectGroup
          projects={ this.state.projects }
        />

        <OrganizationGroup
          organizations={ this.state.organizations}
        />
      </div>
    );
  }
});

React.render(<Evaluate />, document.getElementById('evaluate-app'));
