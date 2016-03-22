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
        actions: [{
          title: 'NUlla malesuda',
          description: 'Sugar plum candy canes candy marshmallow lemon drops',
        },
      ],
      },
    };
  }

  render() {
    return <div className="Profile">
      <Resume
        title={this.state.title}
        description={this.state.description}
        label={this.state.label}
        action={this.state.action}
        />
      <ActionComponentsGroup
        title={this.state.components.title}
        components={this.state.components.actions}
        />
    </div>;

  }
}

if (document.getElementById('profile')) {
  React.render(<Profile />, document.getElementById('profile'));
}
