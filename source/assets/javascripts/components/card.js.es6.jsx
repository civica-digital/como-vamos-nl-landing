window.Card = React.createClass({
  getInitialState () {
    return {
      placeholder: {
        true: "assets/images/icons/yes.png",
        false: "assets/images/icons/no.png"
      }
    }
  },
  componentWillMount() {
    var placeholder = {};

    if (typeof this.props.placeholder !== undefined && this.props.placeholder !== null) {
      ["truthy", "falsy", "actual_placeholder"].map((field) => {
        if (typeof this.props.placeholder !== 'undefined' && this.props.placeholder[field] !== null)
          placeholder[field] = this.props.placeholder[field]
        })
      if(Object.keys(placeholder).length != 0){
        this.placeholder = placeholder
      }
    }
  },
  handleClick() {
    this.props.updateElement(this.props.id);
  },
  render() {
    return <div className={"card " + this.props.classes} onClick={this.handleClick}>
      <div className="card-image">
        <img src={this.state.placeholder[this.props.active]} alt= ""></img>
      </div>
      <h4>{this.props.title}</h4>
      <p>
        {this.props.description}
      </p>
    </div>
  }
})