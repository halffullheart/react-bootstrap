const tooltips = (
  <div style={{ height: 50 }}>

    <div style={{width: '18%', position: 'relative', display: 'inline-block', margin: '10px 20px'}}>
      <Tooltip placement="left">
        Tooltip on left
      </Tooltip>
    </div>

    <div style={{width: '18%', position: 'relative', display: 'inline-block', margin: '10px 20px'}}>
      <Tooltip placement="top">
        Tooltip on top
      </Tooltip>
    </div>

    <div style={{width: '18%', position: 'relative', display: 'inline-block', margin: '10px 20px'}}>
      <Tooltip placement="bottom">
        Tooltip on bottom
      </Tooltip>
    </div>

    <div style={{width: '18%', position: 'relative', display: 'inline-block', margin: '10px 20px'}}>
      <Tooltip placement="right">
        Tooltip on bottom
      </Tooltip>
    </div>

  </div>
);

React.render(tooltips, document.body);
