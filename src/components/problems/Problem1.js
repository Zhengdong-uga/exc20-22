import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';

// @todo did you notice the midterm styling isn't so great at the moment?
// you need to install React Bootstrap!
// - Use react bootstrap's installation instructions.
// - The instructions include adding CSS, you can add that to App.js.
const Problem1 = () => {
  // @todo, add a React Boostrap tooltip that matches the wording in the
  // completed example online.
  // @tip - this 99% of the code you need is somewhere in the React Boostrap docs.
  //   Pasting and changing a few words is all that should be needed here.
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <>
      <Button ref={target} onClick={() => setShow(!show)}>
        Click me to see how I did on Problem 1!
      </Button>
      <Overlay target={target.current} show={show} placement="right">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            I got it right!
          </Tooltip>
        )}
      </Overlay>
    </>
  );
  
}

export default Problem1;