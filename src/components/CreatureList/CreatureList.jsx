import { useState, useEffect } from 'react'; 
import axios from 'axios'; 



function CreatureList () {
    const [listOfCreatures, setListOfCreatures] = useState([]);

    const fetchCreatureList = () => {
        axios.get('/creature').then((response) => {
            //UPdate the array, REACT does the rest 
            setListOfCreatures(response.data);
        }).catch((error) => {
            console.log(`Error in GET ${error}`);
            alert('Something went wrong.');
        });
    }

    //  Dont call the function old way, it may mess up timing, need to use built in REACT 
    useEffect(() => {
        // At this point REACT is ready 
        fetchCreatureList();
    }, []); // Remember the empty array!!!! 

    // All components RETURN what you want them to display
    return (
        <div>
            <h2>Creature List</h2>
            {
                // This turns our array into a string, shows the object on the DOM
                JSON.stringify(listOfCreatures)
            }
            <ul>
                {
                    listOfCreatures.map((creature) => (
                        // What we want to render 
                        <li key={creature.id}>
                            {creature.name} from {creature.origin}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

// All components must export 
export default CreatureList;