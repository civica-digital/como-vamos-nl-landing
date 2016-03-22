class Description extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className='description'>
      <h2>{this.props.title}</h2>
      <p>{this.props.description}</p>
    </div>;
  };
}
