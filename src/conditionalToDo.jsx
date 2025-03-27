// export default function ToDo({task,isDone}) {
//     return(
//         <div>
//             <li>task : {task}</li>
//         </div>
//     )
// }

// conditional rendering - 2

// export default function ToDo({task,isDone,time=0}) {
//     if (isDone) {
//         return(
//             <div>
//                 <li>task : {task} duration:{time}</li>
//             </div>
//         )
//     }
//     else{
//         return(
//             <li>Pending :{task}</li>
//         )
//     }
// }

// conditional rendering:3

// export default function ToDo({task,isDone,time=0}) {

//    return isDone?<li>task : {task} duration:{time}</li> : <li>Not done : {task}</li>

// }

// conditional rendering - 4 with && ..&& dile shudu true ta k e dekhabe..r || dile shudu false ta k dekhabe

// export default function ToDo({task,isDone,time=0}) {

//     return isDone && <li>done task: {task} timeDuration:{time}</li>

// }

// conditional rendering - 5 with ||..eta dile shudu false ta k dekhabe

// export default function ToDo({task,isDone,time=0}) {
//     return isDone || <li>not done task : {task}</li>
// }

// conditional rendering - 6 use variable

export default function ToDo({ task, isDone, time = 0 }) {

    let listItem;
  if (isDone) {

     listItem=<li> task : {task} duration:{time} </li> 

    //  ----------------------

     //amra chaile amn condition o set korte pari j..shudu text lekha dekhabe jdi thake r na thake... 

    //  listItem=<li> task : {task} duration:{time ? 'i am done': 'i am not done yet'} </li> 
    
    // //ekhan aa time show kore ne..ekhan a time tar upor e condition chalano hyse bola hyse time jdi thake tahole show korte j i am done..r na thakle i am not done yet
  }
  else{
    listItem= <li>Pending :{task}</li>;
  }
  return listItem;
}
