var ButtonToolbar = ReactBootstrap.ButtonToolbar,
    OverlayTrigger = ReactBootstrap.OverlayTrigger,
    Tooltip = ReactBootstrap.Tooltip,
    Button = ReactBootstrap.Button;

var tooltips = (
  <ButtonToolbar>
    <OverlayTrigger placement='[[placement]]' overlay={<Tooltip>Tooltip on the [[placement]]</Tooltip>}>
      <Button>Tooltip on the [[placement]]</Button>
    </OverlayTrigger>
  </ButtonToolbar>
);

React.render(tooltips, document.body);
