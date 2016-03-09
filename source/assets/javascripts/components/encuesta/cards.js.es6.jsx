class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      placeholder: {
        true: "assets/images/icons/yes.png",
        false: "assets/images/icons/no.png"
      }
    }
  }

  handleClick() {
    this.props.updateElement(this.props.id);
  }

  render() {

    return <div className={"card " + this.props.classes} onClick={this.handleClick.bind(this)}>
      <div className="card-image">
        <img src={this.state.placeholder[this.props.active]} alt= ""></img>
      </div>
      <h4>{this.props.title}</h4>
      <p>
        {this.props.description}
      </p>
    </div>
  }
}


class Cards extends  React.Component {
  constructor(props){
    super(props);
    console.log("Cards " + JSON.stringify(this.props))
  }

  filter() { return true; }

  render() {
    const cards = this.props.elements.map((item, index) =>
      <Card
        title={item.title}
        description={item.description}
        classes={index == this.props.activeElement ? "selected" : ""}
        active={index == this.props.activelement}
        key={index}
        id={index}
        updateElement={this.props.updateElement} />)

    return <div className="cards">{ cards }</div>
  }
}
