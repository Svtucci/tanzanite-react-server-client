import { useState, useEffect } from 'react'; 
import axios from 'axios'; 



function CreatureList () {
    const [creatureName, setCreatureName] = useState('');
    const [creatureOrigin, setCreatureOrigin] = useState('');
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


    const submitForm = (e) => {
        e.preventDefault();
        axios.post('/creature', {
            name: creatureName,
            origin: creatureOrigin,
        }).then((response) => {
            setCreatureName('');
            setCreatureOrigin('');
            fetchCreatureList();
        }).catch((error) => {
            console.log(`Erorr in POST ${error}`)
            alert('Something went wrong')
        })
    }
    // All components RETURN what you want them to display
    return (
        <div>
            <h2>Creature List</h2>
            <form onSubmit={submitForm}>
                Name: 
                <input type="text"
                       value={creatureName}
                       onChange={(e) => setCreatureName(e.target.value)} />
                      <br />
                Origin: 
                <input type="text"
                       value={creatureOrigin}
                       onChange={(e) => setCreatureOrigin(e.target.value)} />
            <input type="submit" />
            </form>
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