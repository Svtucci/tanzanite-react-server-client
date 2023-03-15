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
