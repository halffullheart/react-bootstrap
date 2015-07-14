var Panel = ReactBootstrap.Panel,
    Table = ReactBootstrap.Table,
    ListGroup = ReactBootstrap.ListGroup,
    ListGroupItem = ReactBootstrap.ListGroupItem;

const title = (
  <h3>Panel title</h3>
);

const panels = (
  <div>


  {/* Basic example */}
  <Panel>
    Basic panel example
  </Panel>


  {/* Example with heading */}
  <Panel header='Panel heading without title'>
    Panel content
  </Panel>


  {/* Example with heading and title */}
  <Panel header={title}>
    Panel content
  </Panel>


  {/* Example with footer */}
  <Panel footer='Panel footer'>
    Panel content
  </Panel>

  
  {/* Contexual panel */}
  <Panel header={title} bsStyle='[[panelStyle]]'>
    Panel content
  </Panel>


  {/* Example with table */}
  <Panel header='Panel heading'>
    <p>Some default panel content here. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
    <Table fill>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  </Panel>


  {/* Example with table and no panel body */}
  <Panel header='Panel heading'>
    <Table fill>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  </Panel>


  {/* Example with list group */}
  <Panel header='Panel heading'>
    <p>Some default panel content here. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
    <ListGroup fill>
      <ListGroupItem>Item 1</ListGroupItem>
      <ListGroupItem>Item 2</ListGroupItem>
      <ListGroupItem>&hellip;</ListGroupItem>
    </ListGroup>
  </Panel>

  </div>
);

React.render(panels, document.body);
