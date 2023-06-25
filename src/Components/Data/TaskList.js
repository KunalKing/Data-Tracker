import TaskDate from './TaskDate';
import './TaskList.css';
import Card from '../UI/Card';

function TaskList(props) {
    return(
    <Card className="Listdiv">
        <TaskDate date={props.date}/>
        <div className='task__details'>{props.Task_Desc}</div>
        <div className='task_status'>{props.Status}</div>
    </Card>
    )
}


export default TaskList;