const select = (
  <form>
    <Input type='select' label='Choose a color' bsStyle='{{validation}}' bsSize='{{size}}'{{multiple}}{{disabled}}>
      <option>Red</option>
      <option>Orange</option>
      <option>Yellow</option>
      <option>Green</option>
      <option>Blue</option>
      <option>Violet</option>
    </Input>
  </form>
);

React.render(select, document.body);
