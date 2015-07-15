var Input = ReactBootstrap.Input;
var radios = (
  <form>
    <Input type='radio' name='exampleRadios' id='exampleRadio1' value='option1' [[inputAttrs]] label='Your front wheels must be turned toward the street.' />
    <Input type='radio' name='exampleRadios' id='exampleRadio2' value='option2' [[inputAttrs]] label='Your wheels must be within 18 inches of the curb.' />
    <Input type='radio' name='exampleRadios' id='exampleRadio3' value='option3' [[inputAttrs]] label='One of your rear wheels must touch the curb.' />
  </form>
);

React.render(radios, document.body);
