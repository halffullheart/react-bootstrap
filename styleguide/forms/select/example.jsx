const select = (
  <form>
    <Input type='select' label='Choose a color' [[inputAttrs]]>
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
