class ActionComponent extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return <div className="ActionComponent">
        <p className="ActionComponent__index">{this.props.index}</p>
        <label className="ActionComponent__title">{this.props.title}</label>
        <p className="ActionComponent__description">{this.props.description}</p>
      </div>;
    }
}

class ActionComponentsGroup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const actionComponents = this.props.components.map(
      (component, index) =>
        <ActionComponent
          title={component.title}
          description={component.description}
          key={index}
          index={index}
          />
    );

    return <div className="ActionComponents">
        <h1>{this.props.title}</h1>
        { actionComponents }
    </div>;
  }
}
