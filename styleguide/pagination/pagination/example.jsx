const PaginationExample = React.createClass({
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
      <Pagination[[previous]][[next]][[first]][[last]][[ellipsis]][[totalItems]][[maxButtons]] bsSize='[[size]]' items={10} activePage={this.state.activePage} onSelect={this.handleSelect} />

React.render(<PaginationExample />, document.body);
