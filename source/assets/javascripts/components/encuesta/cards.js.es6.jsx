class Card extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick() {
    this.props.updateElement(this.props.id);
  }

  render() {
    var placeholderPath = 'assets/images/icons/';
    var placeholder = placeholderPath + (this.props.active ? 'yes.png' : 'no.png');

    return <div className={"card " + this.props.classes} onClick={this.handleClick.bind(this)}>
      <div className="card-image">
        <img src={ placeholder } alt= ""></img>
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
        classes={ index == this.props.activeElement ? 'selected' : '' }
        active={ index == this.props.activeElement ||
          (typeof this.props.activeElement === 'object' &&
           this.props.activeElement.indexOf(index) !== -1) }
        key={index}
        id={index}
        updateElement={this.props.updateElement} />)

    return <div className="cards">{ cards }</div>
  }
}
