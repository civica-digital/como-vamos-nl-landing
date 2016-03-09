const SectionBar = React.createClass({
  render() {
    return <div>
      {this.props.img ? <img src={this.props.img}></img> : ""}
      <label>{this.props.title}</label>
      <p>{this.props.description}</p>
    </div>
  }
})
