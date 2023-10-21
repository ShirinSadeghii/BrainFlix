// do not import the JSON data file here, because it's already listed 
// in the app.jsx, and we only want one source of truth. So instead use
// the JSON data from App by using Props.


// if you want to deconstruct the "props", then you can insert curly 
// brackets inside the () where it says props and YOU NEED TO USE
// THE KEY VALUE FROM APP, where you defined it as "selectedCharacter"

function SelectedCharacter(props) {
    // console.log("props: ", props);
    console.log("props.selectedCharacter: ", props.selectedCharacter);

    return  (
    <section>
    <h2>{props.selectedCharacter.first_name}</h2>
    <h2>{props.selectedCharacter.last_name}</h2>
    <img src={props.selectedCharacter.image} alt="Homer Simpson"/>
    {/* whenever you want to map thru an array, create the map in a <UL>
    and then each singular array item can become an <LI> inside. */}
    {/* WHEN USING MAP, we will get an error if we do not use a KEY. To 
    avoid this error... we can use "index" inside our higher order function
    and then reference that "index" key inside our return element. */}
    <ul>{props.selectedCharacter.catchphrases.map((catchphrase, index) => 
    { return <li key={index}>{catchphrase}</li>}
    )}</ul>
  </section>
    )
    
}

export default SelectedCharacter