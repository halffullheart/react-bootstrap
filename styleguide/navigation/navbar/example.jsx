var Navbar = ReactBootstrap.Navbar,
    Nav = ReactBootstrap.Nav,
    NavItem = ReactBootstrap.NavItem,
    DropdownButton = ReactBootstrap.DropdownButton;

var navbar = (
  <Navbar brand=[[brand]] [[navbarAttrs]]>
    <Nav [[rightLinks]]>
      <NavItem eventKey={1} href='#'>Link</NavItem>
      <NavItem eventKey={2} href='#'>Link</NavItem>
    </Nav>
    <Nav [[rightMenu]]>
      <DropdownButton eventKey={3} title='Dropdown'>
        <MenuItem eventKey='1'>Action</MenuItem>
        <MenuItem eventKey='2'>Another action</MenuItem>
        <MenuItem eventKey='3'>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey='4'>Separated link</MenuItem>
      </DropdownButton>
    </Nav>
  </Navbar>
);

React.render(navbar, document.body);
