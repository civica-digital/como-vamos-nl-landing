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
  render: function() {
    return (
      <div className="bar">
        <SectionBar img='assets/images/ejes/desarrollo.png' description='Seguridad y Justicia' title='Tema'></SectionBar>
        <SectionBar description='2 horas' title='Disponibilidad'></SectionBar>
        <SectionBar description='Asistiendo a algún evento o espacio' title='Modalidad'></SectionBar>
      </div>
    );
  }
});
