import { useState } from "react";

// @todo this is *similar* to a real world password confirm form.
// The "Submit your password" button should be disabled until
// both password fields match and the password entered is at
// least 7 characters.
const Problem4 = () => {
// make a state for each of the passwords
const [input, setInput] = useState('') 
const handleInput = (e) => { setInput(e.target.value) }
const [input2, setInput2] = useState('') 
const handleInput2 = (e) => { setInput2(e.target.value) }

  const disableButton = () => {
    // check if passwords have length > 7 and are equal
    return !(input2 === input && input.length > 7)
  }


  // when on input in the input tag then thats what ur checking in that func
  return(
    <>
      <h4>Create a password!</h4>
      <label className="form-label">Password</label>
      {/* @tip the input event on the inputs will work for this.  */}
      <input
        type="text"
        className="form-control"
        onInput={handleInput}
      />
      <label className="form-label">Confirm Password</label>
      <input
        type="text"
        className="form-control"
        onInput={handleInput2}
      />
      <br />
      <button className='btn btn-primary' disabled={disableButton()}>Submit Your Password</button>
      <strong><i>The submit button should only work when the two password fields match, and the password is at least 7 characters long.</i></strong>
    </>
  )
}

export default Problem4;