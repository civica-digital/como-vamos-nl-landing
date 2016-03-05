window.organizations = React.createClass
  render: () ->
    React.createElement "section",
      { className: "organizaciones" },
      @props.organizations.map (org, index) ->
        React.createElement window.organization, organization: org
