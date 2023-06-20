import './TaskList.css';

//Using props in parameter
const TaskList = (props) => {

    //Helper functions In jsx code for Date
    const month = props.Tasks.taskDate.toLocaleString('en-US', { month: 'long' });
    const day =  props.Tasks.taskDate.toLocaleString('en-US', { day: '2-digit' });
    const year = props.Tasks.taskDate.getFullYear();
   
    return(
    <div className="Listdiv">
        <div className='date__object'>
            <div className='date__objectdata'>{month}</div>
            <div className='date__objectdata'>{day}</div>
            <div className='date__objectdata'>{year}</div>
        </div>
        <div className='task__details'>{props.Tasks.taskDesc}</div>
        <div className='task_status'>{props.Tasks.taskStatus}</div>
    </div>
    )
}


export default TaskList;