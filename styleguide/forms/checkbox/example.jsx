const checkbox = (
  <form>
    <Input type='checkbox' bsStyle='{{validation}}' label='Cream' checked{{readOnly}}{{hasFeedback}} />
    <Input type='checkbox' bsStyle='{{validation}}' label='Sugar'{{readOnly}}{{hasFeedback}} />
  </form>
);

React.render(checkbox, document.body);
