class SuscriptionMail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="SuscriptionMail">
      <h1 className="SuscriptionMail__title">{this.props.title}</h1>
      <div className="SuscriptionMail__form">
        <form>
          <input type="email" placeholder={this.props.placeholder}></input>
          <button onClick={this.props.buttonAction}>{this.props.buttonMsg}</button>
        </form>
      </div>
    </div>;
  }
}
