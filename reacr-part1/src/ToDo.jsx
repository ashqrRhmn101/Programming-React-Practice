export default function ToDo({task, isDone, time}){
    // if(isDone === true){
    //     return(
    //         <div>
    //             <p>Done: {task}</p>
    //             <p>Duration: {time}</p>
    //         </div>
    //     )
    // }
    return isDone ? <p>Done: {task} Duration: {time}</p> : <p>Not Done: {task}</p>
}