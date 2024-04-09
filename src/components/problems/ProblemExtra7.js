import {useState} from "react";

const ProblemExtra7 = () => {
  const [textInput, setTextInput] = useState('')

  return <> 
    <input 
     value={textInput} 
     onChange={(e) => setTextInput(e.target.value)} 
     /> 
    <div className={`color-box ${textInput}`}></div>
  </>
}

export default ProblemExtra7;
