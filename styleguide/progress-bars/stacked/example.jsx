const stackedProgressBar = (
  <ProgressBar>
    <ProgressBar bsStyle='[[bar1Style]]' now={ [[bar1Percent]] }[[bar1Label]][[bar1SrOnly]][[bar1Striped]][[bar1Active]] key={1} />
    <ProgressBar bsStyle='[[bar2Style]]' now={ [[bar2Percent]] }[[bar2Label]][[bar2SrOnly]][[bar2Striped]][[bar2Active]] key={2} />
  </ProgressBar>
);

React.render(stackedProgressBar, document.body);
