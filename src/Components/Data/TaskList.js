
import TaskDate from './TaskDate';
import './TaskList.css';
import Card from '../UI/Card';
import StatusButton from '../Switches/StatusButton';

const TaskList = (props) => {


    return(
    <Card className="Listdiv">
        <TaskDate date={props.date}/>
        <div className='task__details'>{props.Task_Desc}</div>
        <div className='task_status'>{props.Status}</div>
        <StatusButton/>
    </Card>
    )
}


export default TaskList;