var ButtonToolbar = ReactBootstrap.ButtonToolbar,
    OverlayTrigger = ReactBootstrap.OverlayTrigger,
    Button = ReactBootstrap.Button;

const tooltips = (
  <ButtonToolbar>
    <OverlayTrigger placement='[[placement]]' overlay={<Tooltip>Tooltip on the [[placement]]</Tooltip>}>
      <Button>Tooltip on the [[placement]]</Button>
    </OverlayTrigger>
  </ButtonToolbar>
);

React.render(tooltips, document.body);
