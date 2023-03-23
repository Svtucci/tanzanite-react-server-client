import axios from 'axios'; 



function CreatureItem ({ creature, fetchCreatureList }) {

    // This same pattern can be used for update (marking something complete)
    const removeCreature = (e) =>{
        console.log(`removeCreature ${creature.id}`);
        // pass the id of creature to delete
        axios.delete(`/creature/${creature.id}`).then((response) => {
            // Fetch the creaturelist
            fetchCreatureList();
        }).catch((error) => {
            console.log(`error in removeCreature ${error}`);
            alert('Something went wrong'); 
        });
    }
    return(
        <>
             {/* What we want to render */}
             <li >
                  {creature.name} from {creature.origin}
                  <button onClick={(e) => removeCreature(e)}>Delete</button>
             </li>
        </>
    )
}

export default CreatureItem;