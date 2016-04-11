"use strict";

var SectionBar = React.createClass({ displayName: "SectionBar",
  render: function render() {
    return React.createElement("div", null, this.props.img ? React.createElement("img", { src: this.props.img }) : "", React.createElement("label", null, this.props.title), React.createElement("p", null, this.props.description));
  }
});

var Bar = React.createClass({ displayName: "Bar",
  componentDidUpdate: function componentDidUpdate() {
    $('.bar div').css({ 'background-color': tinycolor(this.props.color).lighten(15).toString() });
    $('.bar div:first-child').css({ 'background-color': this.props.color });
    $('.bar div:last-child').css({ 'background-color': tinycolor(this.props.color).lighten(10).toString() });
  },

  render: function render() {
    $('.bar div').css({ 'background-color': tinycolor(this.props.color).lighten(10).toString()
    });
    $('.bar div:first-child').css({ 'background-color': this.props.color
    });
    $('.bar div:last-child').css({
      'background-color': tinycolor(this.props.color).lighten(15).toString()
    });

    return React.createElement("div", { className: "bar" }, React.createElement(SectionBar, {
      img: this.props.logo ? this.props.logo : "../assets/images/ejes/desarrollo.png",
      description: this.props.tema,
      title: "Tema" }), React.createElement(SectionBar, { description: this.props.disponible, title: "Disponibilidad" }), React.createElement(SectionBar, { description: this.props.modalidad, title: "Modalidad" }));
  }
});