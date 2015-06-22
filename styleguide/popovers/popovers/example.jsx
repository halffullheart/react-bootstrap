const buttonWithPopover = (
  <OverlayTrigger trigger='{{trigger}}'{{rootClose}} placement='{{placement}}' overlay={<Popover title='Popover left'><strong>Holy guacamole!</strong> Check this info.</Popover>}>
    <Button bsStyle='default'>Holy guacamole!</Button>
  </OverlayTrigger>
);

React.render(buttonWithPopover, document.body);
