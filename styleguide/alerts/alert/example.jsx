var AlertExample = React.createClass({
  getInitialState() {
    return {
      alertVisible: true
    };
  },

  render() {
    if (this.state.alertVisible) {
      return (
        <Alert [[alertAttrs]]>
          <strong>Alert!</strong> Here is some explanatory text.
        </Alert>
      );
    } else {
      return (
        <Button onClick={this.handleAlertShow}>Show Alert</Button>
      );
    }
  },

  handleAlertDismiss() {
    this.setState({alertVisible: false});
  },

  handleAlertShow() {
    this.setState({alertVisible: true});
  }
});

React.render(<AlertExample />, document.body);
