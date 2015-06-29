const badges = (
  <div>
    <p>
      <a href='#'>Messages <Badge>[[badgeContent]]</Badge></a>
    </p>

    <p>
      <Button>Messages <Badge>[[badgeContent]]</Badge></Button>
    </p>

    <p>
      <Nav bsStyle='tabs' activeKey={1}>
        <NavItem eventKey={1}>Home</NavItem>
        <NavItem eventKey={2}>Profile</NavItem>
        <NavItem eventKey={3}>Messages <Badge>[[badgeContent]]</Badge></NavItem>
      </Nav>
    </p>
  </div>
);

React.render(badges, document.body);
