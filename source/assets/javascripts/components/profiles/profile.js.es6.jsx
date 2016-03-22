class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    $.getJSON('https://script.google.com/a/macros/civica.digital/s/AKfycbyZBWk5JINK1ulRLfN8aZS8k9iMDp_1vIj2VKYhnRp-sMNbSleh/exec?resource=organizations')
      .done((data) => {
        const org = data.find(
            (element) => element.id === parseInt(getUrlVars().organization));

        const organizations = data.filter(
          (data) => intersect(org.action_ids, data.action_ids).length !== 0
        );

        $.getJSON('https://script.google.com/a/macros/civica.digital/s/AKfycbyZBWk5JINK1ulRLfN8aZS8k9iMDp_1vIj2VKYhnRp-sMNbSleh/exec?resource=components')
          .done((data) => {
            const actions = data.filter(
              (data) => org.action_ids.indexOf(data.id_accion) !== -1);

            this.setState({
              title: org.organization_name,
              description: org.description,
              label: 'Registrarme ->',
              action: () => null,
              additional: {
                title: 'Más Información',
                description: `Sugar plum candy canes candy marshmallow lemon drops
                  soufflé ice cream cheesecake fruitcake.
                  Cookie sweet roll wafer sweet

                  cupcake. Marzipan fruitcake chocolate bar carrot cake wafer candy canes
                  chupa chups chocolate. Soufflé jujubes fruitcake.
                  Pudding muffin carrot cake ice cream cookie carrot cake.`,
              },
              organizations: {
                title: 'Otras formas de participar',
                orgs: organizations,
              },
              components: {
                title: '¿Cómo puedes participar?',
                actions: actions,
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
      <ActionComponentsGroup
        title={props.components.title}
        components={props.components.actions}
        />
      <Description
        title={props.additional.title}
        description={props.additional.description}
        />
      <RelatedOrganizations
        title={props.organizations.title}
        orgs={props.organizations.orgs}
        />
    </div>;
  }
}

if (document.getElementById('profile')) {
  React.render(<Profile />, document.getElementById('profile'));
}
