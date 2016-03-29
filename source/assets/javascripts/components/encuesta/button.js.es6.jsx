class Button extends React.Component {
  render () {
    return <button
      className={this.props.disabled()}
      onClick={this.props.action}>{this.props.label}</button>
  }
}
