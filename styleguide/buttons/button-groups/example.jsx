var ButtonGroup = ReactBootstrap.ButtonGroup,
    Button = ReactBootstrap.Button;

const buttonGroup = (
  <ButtonGroup [[groupAttrs]]>
    <Button>Left</Button>
    <Button>Middle</Button>
    <Button>Right</Button>
  </ButtonGroup>
);

React.render(buttonGroup, document.body);
