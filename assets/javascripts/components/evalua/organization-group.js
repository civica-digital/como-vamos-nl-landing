var Organization = React.createClass({displayName: "Organization",
  render: function() {
    return (
      React.createElement("div", {className: "organization"}, 
        React.createElement("div", {className: "organization-image"}, 
          React.createElement("img", {src: this.props.organizationImage})
        ), 
        React.createElement("div", {className: "organization-name"}, 
          React.createElement("p", null,  this.props.organizationName)
        )
      )
    );
  }
});

var OrganizationGroup = React.createClass({displayName: "OrganizationGroup",
  render: function() {
    var organizations = this.props.organizations.map(function(organization, index){
      return (
        React.createElement(Organization, {
          key:  index, 
          organizationName:  organization.organization_name, 
          organizationImage:  organization.logo ?
              organization.logo : "../assets/images/icons/organization.png"}
        )
      );
    });

    return (
      React.createElement("section", {className: "organizations"}, 
        React.createElement("div", {className: "container"}, 
           organizations 
        )
      )
    );
  }
})
;
