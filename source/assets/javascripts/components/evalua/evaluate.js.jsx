var Evaluate = React.createClass({
  getInitialState: function() {
    return {
      projects: [],
      organizations: []
    };
  },
  componentDidMount: function() {
    var self = this;

    $.getJSON('https://script.google.com/a/macros/civica.digital/s/AKfycbyZBWk5JINK1ulRLfN8aZS8k9iMDp_1vIj2VKYhnRp-sMNbSleh/exec?resource=organizations')
      .done((data) => {
        const orgs = data.filter((data) => {
          return data.action_ids.indexOf(parseInt(getUrlVars()[0])) !== -1;
        })
        self.setState({organizations: orgs})
    }).fail((e) => console.log("error " + e));

    $.getJSON('https://script.google.com/a/macros/civica.digital/s/AKfycbyZBWk5JINK1ulRLfN8aZS8k9iMDp_1vIj2VKYhnRp-sMNbSleh/exec?resource=components')
      .done((data) => {
        const projects = data.filter((element, index) => {
          return element.id_accion == getUrlVars()[0];
        });
        self.setState({projects: projects})
    });

    $.getJSON('https://script.google.com/a/macros/civica.digital/s/AKfycbyZBWk5JINK1ulRLfN8aZS8k9iMDp_1vIj2VKYhnRp-sMNbSleh/exec?resource=ejes')
      .done((data) => {
        self.setState({
          ejeTitle: data[getUrlVars()[0]].title,
          tema: data[getUrlVars()[0]].title,
          disponible: stagesSurvey[getUrlVars()[1]].title,
          modalidad: stagesModalidad[getUrlVars()[2]].title
        })
      });

  },
  render: function() {
    return (
      <div>
        <section className="survey-navbar">
          <section>
            <h1>Comienza a evaluar tu municipio</h1>
            <a  href="/">&larr; Vuelve a responder la encuesta</a>
          </section>
          <section className="survey-navbar">
            <Bar tema={ this.state.tema }
              disponible={ this.state.disponible }
              modalidad={ this.state.modalidad } />,
          </section>
        </section>


        <section className="tagline">
          <br />
          <br />
          <p>Proyectos en los que puedes participar:</p>
        </section>

        <ProjectGroup
          projects={ this.state.projects }
        />

        <section className="tagline">
          <p>Organizaciones con las que puedes participar:</p>
        </section>

        <OrganizationGroup
          organizations={ this.state.organizations }
        />
      </div>
    );
  }
});

if (document.getElementById('evaluate-app')) {
  React.render(<Evaluate />, document.getElementById('evaluate-app'));
}
