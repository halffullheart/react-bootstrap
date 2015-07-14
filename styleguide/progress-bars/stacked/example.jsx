var ProgressBar = ReactBootstrap.ProgressBar;

const stackedProgressBar = (
  <ProgressBar>
    <ProgressBar [[bar1Attrs]] key={1} />
    <ProgressBar [[bar2Attrs]] key={2} />
  </ProgressBar>
);

React.render(stackedProgressBar, document.body);
