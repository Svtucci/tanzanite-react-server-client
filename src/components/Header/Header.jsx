import { useState, useEffect } from 'react'; 
import axios from 'axios'; 

// PROPS are passed into our function component
// as an arguement 

function Header(props) {

    return (
         <header>
             <h1>{props.headerTextProp}</h1>
         </header>
    );
}

export default Header;