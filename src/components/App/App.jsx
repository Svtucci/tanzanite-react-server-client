// Source in our stylesheet
// import is similar to Require on the server, brings code from one place to another


import './App.css';
import { useState } from 'react'; 
import CreatureList from '../CreatureList/CreatureList.jsx'

import Header from '../Header/Header.jsx'
import ClickCounter from '../ClickCounter/ClickCounter.jsx'
import Name from '../Name/Name.jsx'


// App is a component, REACT helps to modulize the project
function App () {
  // Our functions and variables will go here

  const [firstName, setFirstName] = useState('Chris')
  // This is the old way of declaring variables 
  // let firstName = 'Steve';
  // let counter = 0; we will use something else 

  //   name of var    func        default value
  

  // const [mystateVariable, setMyStateVariable] = useState('initial value'); 

  // Function to increase click counter 
 



  return (
    // This looks like HTML but is really JSX
    <div>
      <Header />
      <Name />
      <ClickCounter />
      <CreatureList />
    </div>
  );
}

export default App
