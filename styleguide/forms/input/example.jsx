const input = (
  <form>
    <Input type='{{inputType}}' bsStyle='{{validation}}' label='Label' checked{{readOnly}}{{hasFeedback}}{{disabled}} />
  </form>
);

React.render(input, document.body);
