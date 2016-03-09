var SectionBar = React.createClass({
  render: function() {
    return (
      <div>
        { this.props.img ? <img src={this.props.img}></img> : ""}
        <label>{this.props.title}</label>
        <p>{this.props.description}</p>
      </div>
    );
  }
})


var Bar = React.createClass({
  render() {
    return <div className="bar">
      <SectionBar
          img={ this.props.image ?
            this.props.image : "../assets/images/ejes/desarrollo.png" }
          description={ this.props.tema }
          title='Tema' />
      <SectionBar description={this.props.disponible} title='Disponibilidad' />
      <SectionBar description={this.props.modalidad} title='Modalidad' />
    </div>
  }
})
