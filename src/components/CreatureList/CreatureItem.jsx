
function CreatureItem (/* PROPS */) {

    return(
        <>
             {/* What we want to render */}
             <li key={creature.id}>
                  {creature.name} from {creature.origin}
             </li>
        </>
    )
}

export default CreatureItem;