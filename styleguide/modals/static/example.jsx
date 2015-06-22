const staticModal = (
  <Modal title='Modal title'
    backdrop={false}
    animation={false}
    onRequestHide={function() {}}>
    <div className='modal-body'>
      Modal content
    </div>
    <div className='modal-footer'>
      <Button>Close</Button>
      <Button bsStyle='primary'>Save changes</Button>
    </div>
  </Modal>
);

React.render(staticModal, document.body);
