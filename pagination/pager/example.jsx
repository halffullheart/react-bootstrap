const pager = (
  <Pager{{align}}>
    <PageItem{{disabled}}{{alignPreviosLeft}} href='#'>{{previousText}}</PageItem>
    <PageItem{{disabled}}{{alignNextRight}} href='#'>{{nextText}}</PageItem>
  </Pager>
);

React.render(pager, document.body);
