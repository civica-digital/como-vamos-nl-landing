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
  componentDidUpdate () {
    $('.bar div').css(
      { 'background-color': tinycolor(this.props.color).lighten(10).toString() }
    );
    $('.bar div:first-child').css(
      { 'background-color': this.props.color }
    );
    $('.bar div:last-child').css(
      { 'background-color': tinycolor(this.props.color).lighten(15).toString() }
    );
  },

  render() {
    return <div className="bar">
      <SectionBar
          img={ this.props.logo ?
            this.props.logo : "../assets/images/ejes/desarrollo.png" }
          description={ this.props.tema }
          title='Tema' />
      <SectionBar description={this.props.disponible} title='Disponibilidad' />
      <SectionBar description={this.props.modalidad} title='Modalidad' />
    </div>
  }
})
