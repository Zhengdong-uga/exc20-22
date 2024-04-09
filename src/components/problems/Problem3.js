import {useState} from "react";

/**
 * Gets the number of words in a sentence.
 *
 * @param {string} sentence
 *   Usually a sentence, but could be a single word or empty string
 * @returns {number}
 */
function numberOfWords(sentence) {
  if(sentence.length === 0) {
    return 0;
  }
  return sentence.split(' ').filter(String).length;
}

/**
 * Checks if a number is even.
 *
 * @param {number}number
 *   A number to check
 * @returns {boolean}
 *   True if the number is even, otherwise false.
 */
function isEvenNumber(number) {
  return (number % 2 === 0);
}


  const Problem3 = () => {
    const defaultMessage = 'Type your message here and look at the feedback.'
    const [typed, setTyped] = useState(defaultMessage)
    const wordCount = numberOfWords(typed);
    const isEven = isEvenNumber(wordCount);
    // @tip 👆 the state created above is all the state you'll need.
  
    const changeListener = (e) => {
      setTyped(e.target.value);
    }
    // @tip 👆 the event handler above is all event handling you'll need
  
    
  
    return (
      <div className='row'>
        <div className="col col-sm-6">
          {/* @todo The textarea below should have the 'input-even' class when the
            number of words is even and 'input-odd' when the number of words
            is odd 👇
          */}
          <textarea onInput={changeListener}
             rows="3"
             value={typed}
             className={isEven ? "input-even" : "input-odd"}
          >
          </textarea>
        </div>
        <div className="col col-sm-6">
          {/* @todo The div below should have the 'feedback-even' class when the
            number of words is even and 'feedback-odd' when the number of words
            is odd 👇
          */}
          <div className={isEven ? "feedback-even" : "feedback-odd"}>
            {wordCount === 0 && "No Words"}
            {wordCount === 1 && "One Word"}
            {wordCount > 1 && isEven && "An even number of words"}
            {wordCount > 1 && !isEven && "An odd number of words"}
          </div>
        </div>
      </div>
    )
  }

export default Problem3;
