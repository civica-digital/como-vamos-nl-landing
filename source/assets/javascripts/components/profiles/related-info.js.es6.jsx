class ImageLabel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { href, src, title } = this.props;
    return <li className="BoxItems__item">
        <a href={href}>
          <img src={src}></img>
          <label>{title}</label>
        </a>
      </li>;

  }
}
class ImageLabelGroup extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <ul className="BoxItems__items">
      { this.props.items.map((item) => <ImageLabel {...item} />) }
    </ul>;
  }
}

class RelatedInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="RelatedContent">
      <div className="BoxItemsCoordination">
        <label className="BoxItems__title">{ this.props.title }</label>
        <ImageLabelGroup { ...this.props } />
      </div>
    </div>;
  }
}
