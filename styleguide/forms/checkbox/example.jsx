var Input = ReactBootstrap.Input;

const checkbox = (
  <form>
    <Input type='checkbox' [[inputAttrs]] label='Cream' checked />
    <Input type='checkbox' [[inputAttrs]] label='Sugar' />
  </form>
);

React.render(checkbox, document.body);
