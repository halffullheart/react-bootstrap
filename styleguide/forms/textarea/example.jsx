var Input = ReactBootstrap.Input;

const textarea = (
  <form>
    <Input type='textarea' label='Label' [[inputAttrs]] />
  </form>
);

React.render(textarea, document.body);
