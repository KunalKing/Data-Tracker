import './TaskList.css';
import './TaskDate.css';

function TaskDate(props){
         //Helper functions In jsx code for Date
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day =  props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();

    return(
    <div className='date__object'>
        <div className='date__objectdata'>{month}</div>
        <div className='date__objectdata'>{day}</div>
        <div className='date__objectdata'>{year}</div>
    </div>
        );
}

export default TaskDate;
