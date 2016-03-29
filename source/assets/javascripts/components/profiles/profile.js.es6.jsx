class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    $.getJSON('https://script.google.com/a/macros/civica.digital/s/AKfycbyZBWk5JINK1ulRLfN8aZS8k9iMDp_1vIj2VKYhnRp-sMNbSleh/exec?resource=components')
      .done((data) => {
        const component = data.find(
            (element) => element.id_component === parseInt(getUrlVars().component));

        const components = data.filter(
          (comp) => component.id_accion == comp.id_accion
        );

        const activities = [];
        const { activity_1, activity_2 } = component;
        if (activity_1 !== null) activities.push({ title: activity_1 })
        if (activity_2 !== null) activities.push({ title: activity_2 })

        $.getJSON('https://script.google.com/a/macros/civica.digital/s/AKfycbyZBWk5JINK1ulRLfN8aZS8k9iMDp_1vIj2VKYhnRp-sMNbSleh/exec?resource=organizations')
          .done((data) => {
            const organizations = data
              .filter((org) => org.action_ids.indexOf(component.id_accion) !== -1)
              .map((comp) => {
                return {
                  src: comp.logo,
                  href: urlComponent(comp.id),
                  title: comp.organization_name,
                };
              });

            this.setState({
              title: component.component,
              description: component.description,
              label: 'Registrarme ' + String.fromCharCode(10140),
              action: () => null,
              additional: {
                title: 'Más Información',
                description: component.information,
              },
              organizations: {
                title: 'Coordinan',
                orgs: organizations,
              },
              activities: {
                title: '¿Cómo puedes participar?',
                actions: activities,
              },
              components: {
                title: 'Otras formas de participar',
                items: components,
              },
            });
          });
      });
  }

  render() {
    const props = this.state;
    if (props === null) return <div className='Profile' />;

    return <div className='Profile'>
      <Resume
        title={props.title}
        description={props.description}
        label={props.label}
        action={props.action}
        />

      <div className="container">
        <div className="GroupProfile">
          <div className="Content">
            <ActionComponentsGroup
              title={props.activities.title}
              components={props.activities.actions}
              />
            <Description
              title={props.additional.title}
              description={props.additional.description}
              />
          </div>
          <RelatedInfo
            title={props.organizations.title}
            items={props.organizations.orgs}
            />
        </div>
        <RelatedOrganizations
          title={props.components.title}
          items={props.components.items}
          />
      </div>
    </div>;
  }
}

if (document.getElementById('profile')) {
  React.render(<Profile />, document.getElementById('profile'));
  $('.BoxItems__item label').fitText(1.2);
}
