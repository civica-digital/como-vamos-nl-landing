class RelatedOrganizations extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="relatedOrganizations">
      <h1 className="relatedOrganizations__title">{this.props.title}</h1>
      <OrganizationGroup organizations={this.props.orgs}/>
    </div>;
  }
}
