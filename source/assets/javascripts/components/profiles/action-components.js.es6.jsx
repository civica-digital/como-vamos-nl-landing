class ActionComponent extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return <div className="ActionComponent">
        <div className="ActionComponent__index">
          {this.props.index}
        </div>

        <div className="ActionComponent__group">
          <label className="ActionComponent__title">{this.props.title}</label>
          <p className="ActionComponent__description">{this.props.description}</p>
        </div>
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
          title={component.component}
          description={component.description}
          key={index}
          index={index}
          />
    );

    return <div className="ActionComponents">
        <div className="container">
          <h1>{this.props.title}</h1>
          { actionComponents }
        </div>
    </div>;
  }
}
