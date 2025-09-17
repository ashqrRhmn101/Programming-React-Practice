export default function Actor({actor}){
    // console.log(actor);
    return(
        <div className="student">
            <p>Name: {actor.name}</p>
            <p>Age: {actor.age}</p>
        </div>
    )
}