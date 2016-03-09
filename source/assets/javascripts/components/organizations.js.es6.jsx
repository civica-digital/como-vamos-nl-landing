const Organizations = React.createClass({
  render() {
    const orgs = this.props.orgs.map((stage, index) => {
      return <Organization name={stage.organization_name}></Organization>
    })

    return <section className="organizaciones">
      {orgs}
    </section>
  }
});
