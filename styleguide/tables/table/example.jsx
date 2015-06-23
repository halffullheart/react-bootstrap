const table = (
  <Table{{striped}}{{bordered}}{{condensed}}{{hover}}{{responsive}}>
    <tr>
      <th>#</th>
      <th>Fruit</th>
      <th>Color</th>
    </tr>
    <tr>
      <td>1</td>
      <th>Lemon</th>
      <th>Yellow</th>
    </tr>
    <tr{{{contextClasses}}}>
      <td>2</td>
      <th>Orange</th>
      <th>Orange</th>
    </tr>
    <tr>
      <td>3</td>
      <th>Pomegranate</th>
      <th>Red</th>
    </tr>
    <tr>
      <td>4</td>
      <th{{{contextClasses}}}>Plum</th>
      <th>Purple</th>
    </tr>
  </Table>
);

React.render(table, document.body);
