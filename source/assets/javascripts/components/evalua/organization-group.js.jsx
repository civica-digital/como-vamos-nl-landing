var Organization = React.createClass({
  render: function() {
    return (
      <div>
        <div>
          <img src={this.props.organizationImage }/>
        </div>
        <div>
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
          organizationImage={ organization.image ?
              organization.image : "assets/images/icons/citizen.png" }
        />
      );
    });

    return (
      <section className='organizaciones'>
        { organizations }
      </section>
    );
  }
})
