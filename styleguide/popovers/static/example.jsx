var Popover = ReactBootstrap.Popover;

const popover = (
  <div style={{ height: 120 }}>
    <Popover placement='[[placement]]' positionLeft={200} positionTop={50} title='Popover [[placement]]'>
      And here’s some <strong>amazing</strong> content. It’s very engaging. Right?
    </Popover>
  </div>
);

React.render(popover, document.body);
