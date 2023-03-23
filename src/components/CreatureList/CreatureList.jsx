import { useState, useEffect } from 'react'; 
import axios from 'axios'; 
import CreatureForm from './CreatureForm.jsx';
import CreatureItem from './CreatureItem.jsx';

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

    // All components RETURN what you want them to display
    return (
        <div>
            <CreatureForm 
                creatureName={creatureName}
                setCreatureName={setCreatureName}
                creatureOrigin={creatureOrigin}
                setCreatureOrigin={setCreatureOrigin}
                fetchCreatureList={fetchCreatureList}
            />

            <h2>Creature List</h2>
            
            <ul>
                { // .map happens in our List Component
                    listOfCreatures.map((creature) => (
                        <CreatureItem 
                            key={creature.id} // Key must be inside of map here or else error
                            creature={creature}
                            fetchCreatureList={fetchCreatureList}
                        />
                    ))
                }
            </ul>
        </div>
    );
}

// All components must export 
export default CreatureList;



/*             <ul>
                
                    listOfCreatures.map((creature) => (
                        <CreatureItem 
                            key={creature.id} // Key must be inside of map here or else error
                            creature={creature}
                            CreatureName={creature.name}
                        />
                    ))
                }
            </ul> 
            
            CreatureItem({creature, creatureName})
            
                    li
                        {creatureName} is from {creature.orign}
            
            
            
            */




