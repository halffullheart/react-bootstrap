const listgroup = (
  <ListGroup>
    <ListGroupItem{{linked}}{{heading}}>Cras justo odio{{badge}}</ListGroupItem>
    <ListGroupItem{{linked}}{{active}}{{disabled}}>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem{{linked}}{{heading}} bsStyle={{style}}>Morbi leo risus</ListGroupItem>
    <ListGroupItem{{linked}}{{heading}}>Porta ac consectetur ac</ListGroupItem>
    <ListGroupItem{{linked}}{{heading}}>Vestibulum at eros</ListGroupItem>
  </ListGroup>
);

React.render(listgroup, document.body);
