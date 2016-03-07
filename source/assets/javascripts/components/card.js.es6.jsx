window.Card = React.createClass({
  getInitialState () {
    return {
      selected: "",
      placeholder: {
        truthy: "assets/images/icons/yes.png",
        falsy: "assets/images/icons/no.png"
      },
      actual_placeholder: "assets/images/icons/no.png"
    }
  },
  componentWillMount() {
    placeholder = {}

    if (typeof this.props.placeholder !== undefined && this.props.placeholder !== null) {
      ["truthy", "falsy", "actual_placeholder"].map((field) => {
        if (typeof this.props.placeholder !== 'undefined' && this.props.placeholder[field] !== null)
          placeholder[field] = this.props.placeholder[field]
        })
      if(Object.keys(placeholder).length === 0){
        this.setState(placeholder)
      }
    }
  },
  handleClick() {
    if (this.state.selected == "")
      this.setState({
        selected: "selected",
        actual_placeholder: this.state.placeholder.truthy
      })
    else
      this.setState({
        selected: "",
        actual_placeholder: this.state.placeholder.falsy
      })
  },
  render() {
    return <div className={"card " + this.state.selected} onClick={this.handleClick}>
      <div className="card-image">
        <img src={this.state.actual_placeholder} alt= ""></img>
      </div>
      <h4>{this.props.title}</h4>
      <p>
        this.props.description
      </p>
    </div>
  }
})
