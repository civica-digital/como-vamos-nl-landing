class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Semana de la seguridad Vial',
      description: `Sugar plum candy canes candy marshmallow lemon drops
       soufflé ice cream cheesecake fruitcake. Cookie sweet roll wafer sweet
       cupcake. Marzipan fruitcake chocolate bar carrot cake wafer candy canes
       chupa chups chocolate. Soufflé jujubes fruitcake.
       Pudding muffin carrot cake ice cream cookie carrot cake.`,
      label: 'Registrarme ->',
      action: () => null,
      components: {
        title: '¿Cómo puedes participar?',
        actions: [
          {
            title: 'NUlla malesuda',
            description: 'Sugar plum candy canes candy marshmallow lemon drops',
          },
        ],
      },
      additional: {
        title: 'Más Información',
        description: `Sugar plum candy canes candy marshmallow lemon drops
         soufflé ice cream cheesecake fruitcake.

         Cookie sweet roll wafer sweet
         cupcake. Marzipan fruitcake chocolate bar carrot cake wafer candy canes
         chupa chups chocolate. Soufflé jujubes fruitcake.
         Pudding muffin carrot cake ice cream cookie carrot cake.`,
      },
    };
  }

  render() {
    const props = this.state;
    return <div className="Profile">
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
    </div>;

  }
}

if (document.getElementById('profile')) {
  React.render(<Profile />, document.getElementById('profile'));
}
