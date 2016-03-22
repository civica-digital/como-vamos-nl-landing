class Resume extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div className="ProfileOverview">
      <h1 className="ProfileOverview__title">{this.props.title}</h1>
      <p className="ProfileOverview__description">{this.props.description}</p>
      <div className="submit-section">
        <Button label={this.props.label} action={this.props.action} />
      </div>
    </div>
  }
}
