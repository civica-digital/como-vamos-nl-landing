window.Button = React.createClass({
  render () {
    
    return <button onClick={this.props.action}>{this.props.label}</button>
  }
})
