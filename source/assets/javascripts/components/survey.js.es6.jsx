window.Survey = React.createClass({
  getInitialState () {
    return {
      active_stage: 0,
      results: []
    }
  },
  componentWillMount() {
    stages = this.props.stages
    stages[this.state.active_stage].active = true
    this.state.stages = stages
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
    const button = this.state.stages[this.state.active_stage]
    button.action = this.manageButton;

    return <section className="survey">
      <window.Stages stages={this.state.stages}></window.Stages>
        <window.Cards elements={this.state.stages[this.state.active_stage]} activeElement={this.getSelectedForStage()} updateElement={this.updateResult}>
        </window.Cards>

        <div className="submit-section">
          <window.Button label={button.label} action={this.manageButton}></window.Button>
        </div>
    </section>
  }
});
