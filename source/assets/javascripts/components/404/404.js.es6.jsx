class Error404 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var { msg } = getUrlVars();
    if (typeof msg === "undefined")
      msg = 'El recurso que estas buscando no fue encontrado';

    return <div className="container">
      <img src="assets/images/illustrations/404.png" />
      <p>{ msg.replace(/\+/g, ' ') }</p>
    </div>;
  }
}


if (document.getElementById('error404')) {
  React.render(<Error404 />, document.getElementById('error404'));
}
