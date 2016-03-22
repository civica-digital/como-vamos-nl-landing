class RelatedOrganizations extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="relatedOrganizations">
      <h2>{this.props.title}</h2>
      <OrganizationGroup organizations={this.props.orgs}/>
    </div>;
  }
}
