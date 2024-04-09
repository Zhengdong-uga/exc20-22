import {useState, useEffect} from "react";
// @todo when you click the button you need to fetch from
//  'https://yesno.wtf/api', which returns a yes or no +
// an image. You also need to keep track of how many yes or nos
// are returned.
// Refer to the example and the comments below for more details.

const Problem5 = () => {
  const [yesOrNo, setYesOrNo] = useState(null)
  const [yesCount, setYesCount] = useState(0)
  const [noCount, setNoCount] = useState(0)


  const getYesNos = () => {
    fetch('https://yesno.wtf/api') 
      .then(response => response.json()) 
      .then(data => {
        // data.answer === "yes" ? yesCount += 1 : noCount += 1
        if(data.answer === "yes") {
          // 👇 This will work in most cases, but not really fast 
          // clicking. There is a way to avoid this fragility
          // setYesCount(yesCount + 1)

          // This is a more solid way to update, as it is based
          // on the state value AT THAT MOMENT. Not the state
          // value when the `setYesCount` was called.
          setYesCount((previous) => previous + 1)
        } else {
          setNoCount((previous) => previous + 1)
        }
        setYesOrNo(data)
      }); 
  }

  // useEffect with an empty array is how to run something
  // immediately after the component loads... and only then
  useEffect(() => { 
    getYesNos();
  }, []);

  // console.log(yesOrNo)
  // debugger; // would stop the component so you could see what it has
  return (
    <div className='row'>
      <div className="col col-sm-4">
        <button onClick={getYesNos}>
          Get a yes or no
        </button>
        <h3>YES COUNT: {yesCount}</h3>
        <h3>NO COUNT: {noCount}</h3> 
      </div>
      <div className="col col-sm-8">
        {yesOrNo !== null &&  
          <> 
          <h3>{yesOrNo.answer}</h3> 
          <img src={yesOrNo.image} alt={yesOrNo.answer} />
        </>}
      </div>
    </div>
  )
}

export default Problem5;
