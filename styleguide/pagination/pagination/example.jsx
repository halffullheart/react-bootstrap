var Pagination = ReactBootstrap.Pagination;

var PaginationExample = React.createClass({
  getInitialState() {
    return {
      activePage: 1
    };
  },

  handleSelect(event, selectedEvent){
    this.setState({
      activePage: selectedEvent.eventKey
    });
  },

  render() {
    return (
        <Pagination [[paginationAttrs]] activePage={this.state.activePage} onSelect={this.handleSelect}/>
    )
  }
});

React.render(<PaginationExample />, document.body);
