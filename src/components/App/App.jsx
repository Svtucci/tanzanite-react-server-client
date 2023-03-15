// Source in our stylesheet
// import is similar to Require on the server, brings code from one place to another


import './App.css';
import { useState } from 'react'; 
import CreatureList from '../CreatureList/CreatureList.jsx'
// App is a component, REACT helps to modulize the project
function App () {
  // Our functions and variables will go here

  const [firstName, setFirstName] = useState('Chris')
  // This is the old way of declaring variables 
  // let firstName = 'Steve';
  // let counter = 0; we will use something else 

  //   name of var    func        default value
  const [counter, setCounter] = useState(0)

  // const [mystateVariable, setMyStateVariable] = useState('initial value'); 

  // Function to increase click counter 
  let increaseClickCounter = () => {
    // counter += 1; // Do not modify state directly! 
    console.log('BEFORE:', counter); // COUNTER IS NOT DIFFERENT YET 
    setCounter(counter + 1);
    console.log('AFTER:', counter);
  }
  let decreaseClickCounter = () => {
    setCounter(counter - 1);
    console.log(counter);
  }



  return (
    // This looks like HTML but is really JSX
    <div>
      <header>
        <h1>Welcome to React! {counter}</h1>
      </header>
      <p>Hello World! {firstName}</p>
      <p>You clicked {counter} times!</p>
      <button onClick={increaseClickCounter}>Increase</button>
      <button onClick={decreaseClickCounter}>Decrease</button>
      {/* TODO: Add a decrease button ^^ */}

      {/* Render our Creature List on the DOM */}
      <CreatureList />
      
    </div>
  );
}

export default App
