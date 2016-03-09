const Survey = React.createClass({
  getInitialState () {
    return {
      active_stage: 0,
      results: []
    }
  },
  componentWillMount() {
    $.getJSON("https://script.google.com/macros/s/AKfycbyZBWk5JINK1ulRLfN8aZS8k9iMDp_1vIj2VKYhnRp-sMNbSleh/exec?resource=ejes")
      .done((data) =>
        this.setState({
          stages: [
            {
              title: "¿Qué tema te interesa?",
              items: data,
              label: "Avanzar " + String.fromCharCode(8594),
              active: true
            }, {
              title: "¿Cuánto tiempo tienes disponible?",
              items: stagesSurvey,
              label: "Avanzar " + String.fromCharCode(8594)
            }, {
              title: "¿Cómo te gustaría ayudar?",
              items: stagesModalidad,
              label: "Comienza a participar " + String.fromCharCode(8594),
            }
          ]}));
  },
  manageButton(e) {
    new_stage = (this.state.active_stage + 1);

    if (new_stage !== this.state.stages.length) {
      this.state.stages[this.state.active_stage].active = false;
      this.state.stages[new_stage].active = true;

      this.setState({active_stage: new_stage});

    } else {
     const queryObj = this.state.results.reduce((data, current, index) => {
       data[index] = current;
       return data;
     }, {})

      window.location = 'evalua?'  + $.param(queryObj);
    }

  },
  updateResult(index) {
    var new_results = this.state.results
    new_results[this.state.active_stage] = index;
    console.log("update results " + index);
    this.setState({results: new_results});
  },
  getSelectedForStage() {
    if (typeof this.state.results[this.state.active_stage] !== "undefined" &&
    this.state.results[this.state.active_stage] !== null) {
      return this.state.results[this.state.active_stage];
    } else {
      return -1;
    }
  },
  shouldComponentUpdate() {
    $('html, body').animate(
      {scrollTop: $(".survey").offset().top }, 800);

    return true;
  },

  render() {
    if (!this.state.stages) return ( <section className="survey" /> );

    const button = this.state.stages[this.state.active_stage];

    return <section className="survey">
      <Stages stages={this.state.stages} />
      <Cards
        elements={this.state.stages[this.state.active_stage].items}
        activeElement={this.getSelectedForStage()}
        updateElement={this.updateResult} />

        <div className="submit-section">
          <Button label={button.label} action={this.manageButton} />
        </div>
    </section>
  }
});


if (document.getElementById('survey'))
  React.render(<Survey />, document.getElementById('survey'));
