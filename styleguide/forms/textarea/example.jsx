const textarea = (
  <form>
    <Input type='textarea' label='Label' bsStyle='{{validation}} bsSize='{{size}}'{{readOnly}} />
  </form>
);

React.render(textarea, document.body);
