var ButtonGroup = ReactBootstrap.ButtonGroup,
    Button = ReactBootstrap.Button;

var buttonGroup = (
  <ButtonGroup [[groupAttrs]]>
    <Button>Left</Button>
    <Button>Middle</Button>
    <Button>Right</Button>
  </ButtonGroup>
);

React.render(buttonGroup, document.body);
