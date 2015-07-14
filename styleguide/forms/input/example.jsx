var Input = ReactBootstrap.Input;
const input = (
  <form>
    <Input label='Label' [[inputAttrs]] />
  </form>
);

React.render(input, document.body);
