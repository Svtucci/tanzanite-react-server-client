import { useState, useEffect } from 'react'; 
import axios from 'axios'; 



function ClickCounter() {
    const [counter, setCounter] = useState(0)
    
    let increaseClickCounter = () => {
        // counter += 1; // Do not modify state directly! 
        console.log('BEFORE:', counter); // COUNTER IS NOT DIFFERENT YET 
        setCounter(counter + 1);
        console.log('AFTER:', counter);
      }
      let decreaseClickCounter = () => {
        // counter += 1; // Do not modify state directly! 
        console.log('BEFORE:', counter); // COUNTER IS NOT DIFFERENT YET 
        setCounter(counter + 1);
        console.log('AFTER:', counter);
      }
    return (
      <div>
      
      <p>You click {counter} times!</p>
      <button onClick={increaseClickCounter}>Increase</button>
      <button onClick={decreaseClickCounter}>Decrease</button>
      </div>
    )
}

export default ClickCounter;