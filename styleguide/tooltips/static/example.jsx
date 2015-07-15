var Tooltip = ReactBootstrap.Tooltip;

var tooltip = (
  <div style={{ height: 50 }}>
    <Tooltip placement="[[placement]]" positionLeft={150} positionTop={50}>
      <strong>Holy guacamole!</strong> Check this info.
    </Tooltip>
  </div>
);

React.render(tooltip, document.body);
