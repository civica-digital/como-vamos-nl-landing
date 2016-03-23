var Organization = React.createClass({
  render: function() {
    return (
      <div className="organization">
        <div className="organization-image">
          <img src={this.props.organizationImage }/>
        </div>
        <div className="organization-name">
          <p>{ this.props.organizationName }</p>
        </div>
      </div>
    );
  }
});

var OrganizationGroup = React.createClass({
  render: function() {
    var organizations = this.props.organizations.map(function(organization, index){
      return (
        <Organization
          key={ index }
          organizationName={ organization.organization_name }
          organizationImage={ organization.logo ?
              organization.logo : "../assets/images/icons/organization.png" }
        />
      );
    });

    return (
      <section className='organizations'>
        <div className='container'>
          { organizations }
        </div>
      </section>
    );
  }
})
