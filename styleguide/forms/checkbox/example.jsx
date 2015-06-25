const checkbox = (
  <form>
    <Input type='checkbox' bsSize='{{size}}' bsStyle='{{validation}}' label='Cream' checked{{readOnly}}{{hasFeedback}}{{disabled}} />
    <Input type='checkbox' bsSize='{{size}}' bsStyle='{{validation}}' label='Sugar'{{readOnly}}{{hasFeedback}}{{disabled}} />
  </form>
);

React.render(checkbox, document.body);
