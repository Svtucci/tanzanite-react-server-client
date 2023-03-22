// Source in our stylesheet
// import is similar to Require on the server, brings code from one place to another


import './App.css';
import { useState } from 'react'; 
import CreatureList from '../CreatureList/CreatureList.jsx'

import Header from '../Header/Header.jsx'
import ClickCounter from '../ClickCounter/ClickCounter.jsx'
import Name from '../Name/Name.jsx'
import InputExample from '../InputExample/InputExample.jsx'

// App is a component, REACT helps to modulize the project
function App () {


const [headerText, setHeaderText] = useState('Welcome to React!!!!');


  return (
    // This looks like HTML but is really JSX
    <div>
      {/* HeaderTextProp is the name of our prop */}
      {/* {headerText} is the value we are assigning to the prop */}
      <Header 
              textColor="salmon"
              headerText={headerText} 
              someOtherThing={'Cake'}
       />
       
       {/* <Header 
              textColor="limegreen"
              headerText={'Hello!! This is a Prop'} 
              someOtherThing={'Cake'}
       /> */}

      {/* <Name />
      <ClickCounter />
      <InputExample /> */}


      <CreatureList />
    </div>
  );
}

export default App
