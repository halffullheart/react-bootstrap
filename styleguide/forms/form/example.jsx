const form = (
  <form [[formAttrs]]>
    <Input id='exampleFormInputName' type='text' label='Name' placeholder='Jane Doe' />
    <Input id='exampleFormInputEmail' type='email' label='Email' placeholder='jane.doe@example.com' />
    <Button type='submit'>Send Invitation</Button>
  </form>
);

React.render(form, document.body);
