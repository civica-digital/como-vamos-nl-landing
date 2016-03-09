class Stage extends  React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var decoration = [];

    if (this.props.active) {
      decoration[0] = <div className="bar" />
      decoration[1] = <div className="circle active" />
      decoration[2] = <div className="circle active shadow" />
      decoration[3] = <div className="uparrow" />
    } else {
      decoration[0] = <div className="bar" />
      decoration[1] = <div className="circle" />
    }



    return <div className="stage">
      <div className="stage-progress" >
         {decoration}
      </div>

      <div className="stage-name">
        { this.props.title }
      </div>

    </div>
  }
}

class Stages extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    stages = this.props.stages.map((stage, index) =>
      <Stage title={stage.title} key={index} active={ stage.active } />)

    return <div className="bars">{ stages }</div>
  }
}
