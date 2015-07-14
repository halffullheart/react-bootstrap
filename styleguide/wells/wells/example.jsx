var Well = ReactBootstrap.Well;

const well = (
  <div>
    <Well [[wellAttrs]]>Look I’m in a large well!</Well>
  </div>
);

React.render(well, document.body);
