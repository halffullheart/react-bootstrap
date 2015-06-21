const pager = (
  <Pager{{align}}>
    <PageItem{{alignPreviosLeft}} href='#'>{{previousText}}</PageItem>
    <PageItem{{alignNextRight}} href='#'>{{nextText}}</PageItem>
  </Pager>
);

React.render(pager, document.body);
