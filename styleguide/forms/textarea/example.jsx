var Input = ReactBootstrap.Input;

var textarea = (
  <form>
    <Input type='textarea' label='Label' [[inputAttrs]] />
  </form>
);

React.render(textarea, document.body);
