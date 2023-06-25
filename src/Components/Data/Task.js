import './Task.css';
import TaskList from './TaskList';
import Card from '../UI/Card';

const Task = (props) => {
    return(
        <Card className='Data_List'>
        <TaskList
          Task_Desc={props.List[0].Task_Desc}
          Status={props.List[0].Status}
          date={props.List[0].date}
        ></TaskList>
        <TaskList
          Task_Desc={props.List[1].Task_Desc}
          Status={props.List[1].Status}
          date={props.List[1].date}
        ></TaskList>
        <TaskList
          Task_Desc={props.List[2].Task_Desc}
          Status={props.List[2].Status}
          date={props.List[2].date}
        ></TaskList>
        <TaskList
          Task_Desc={props.List[3].Task_Desc}
          Status={props.List[3].Status}
          date={props.List[3].date}
        ></TaskList>
      </Card>
    );
};

export default Task;