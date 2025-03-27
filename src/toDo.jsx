export default function ToDo({task,isDone,duration}) {

    if (isDone) {
    return(
        <div style={{fontSize:"24px",fontWeight:"600"}}>
            <li>task : {task} <br />time: {duration}</li>
        </div>
    )
}

else{
    return  <div style={{fontSize:"24px",fontWeight:"600"}}>
    <li>task : {task} <br />time: {duration}</li>
</div>
}
    
}

