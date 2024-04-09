import {useState} from "react";

const ProblemExtra6 = () => {
  const [inputState, setInputState] = useState('');
  const [repeatTimeState, setRepeatTimeState] = useState(1);


  return (
    <> 
      <label> The Words
         <input 
          value={inputState}
          onChange={ (e) => setInputState(e.target.value) } 
        />
        </label> 
      <label> How many times to repeat() 
        <input 
         type="number" 
         className="form-control" 
         value={repeatTimeState} 
         onChange={ (e) => setRepeatTimeState(e.target.value)} />
      </label> 
      <h2>Word box</h2> 
      <div class="m-4 p-3 border border-dark">
        {inputState.repeat(repeatTimeState)}
      </div> 
    </>
  )
}

export default ProblemExtra6;
