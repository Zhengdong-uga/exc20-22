import {useState} from 'react';
import {capitals} from "../util/arrays";

// @todo something is broken here. If you reference the example, you'll
// see that hovering over a USA state name results in the state + capital
// being displayed below.
// Fix this by making a small change to two lines!
// @tip if you're not immediately sure what the fix is, copy this code to a separate file
// so you can start from the beginning if needed.
const Problem2 = () => {
  const [hovered, setHovered] = useState(null);
  return <>
    {capitals.map((capital, index) =>
      <span
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        key={index}>
        {capital.name},&nbsp;
      </span>)}
    {hovered !== null && <h3> {capitals[hovered].name}: {capitals[hovered].capital} </h3>}
  </>
}

export default Problem2;
