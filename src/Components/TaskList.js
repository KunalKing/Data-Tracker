import './TaskList.css';

//Using props in parameter
const TaskList = (props) => {
    return(
    <div className="Listdiv">
        <div>{props.taskDate.toISOString()}</div>
        <div>{props.taskDesc}</div>
        <div>{props.taskStatus}</div>
    </div>
    )
}


export default TaskList;