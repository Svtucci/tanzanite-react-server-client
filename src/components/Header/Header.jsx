import { useState, useEffect } from 'react'; 
import axios from 'axios'; 

// PROPS are passed into our function component
// as an arguement 

// common to also see DESTRUCTURING
// const{ textColor, headerText, someOtherThing } = props;


function Header({ textColor, headerText, someOtherThing}) {

    return (
         <header>
             <h1 style={{color: textColor}}>
                 {headerText}
             </h1>
             <h2>{someOtherThing}</h2>
         </header>
    );
}

export default Header;