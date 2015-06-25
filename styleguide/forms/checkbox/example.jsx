const checkbox = (
  <form>
    <Input type='checkbox' bsSize='{{size}}' bsStyle='{{validation}}' label='Cream' checked{{readOnly}}{{hasFeedback}} />
    <Input type='checkbox' bsSize='{{size}}' bsStyle='{{validation}}' label='Sugar'{{readOnly}}{{hasFeedback}} />
  </form>
);

React.render(checkbox, document.body);
