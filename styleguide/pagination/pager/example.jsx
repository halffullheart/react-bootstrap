var Pager = ReactBootstrap.Pager,
    PageItem = ReactBootstrap.PageItem;

var pager = (
  <Pager[[align]]>
    <PageItem [[disabled]] [[alignPrevious]] href='#'>[[previousText]]</PageItem>
    <PageItem [[disabled]] [[alignNext]] href='#'>[[nextText]]</PageItem>
  </Pager>
);

React.render(pager, document.body);
