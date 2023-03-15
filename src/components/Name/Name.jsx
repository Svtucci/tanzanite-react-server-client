import { useState, useEffect } from 'react'; 
import axios from 'axios'; 

function Name() {
    const [firstName, setFirstName] = useState('Steve')
    return (
        <div>
            <p>Hello World! {firstName}</p>
        </div>
    )
}

export default Name; 