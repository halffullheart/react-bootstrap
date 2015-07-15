var Input = ReactBootstrap.Input;
var input = (
  <form>
    <Input label='Label' [[inputAttrs]] />
  </form>
);

React.render(input, document.body);
