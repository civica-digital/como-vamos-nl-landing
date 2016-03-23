class Description extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className='SectionText'>
        <h1 className="SectionText__title">{this.props.title}</h1>
        <p className="SectionText__description">{this.props.description}</p>
    </div>;
  };
}
