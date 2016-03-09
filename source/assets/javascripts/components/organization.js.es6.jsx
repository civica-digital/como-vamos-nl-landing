const Organization = React.createClass({
  render() {
    return <div>
      <div>
        <img src="assets/images/icons/citizen.png"></img>
      </div>
      <div>
        <p>
          {this.props.name}
        </p>
      </div>
    </div>

  }
});
