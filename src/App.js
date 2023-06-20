import './App.css';
import TaskList from './Components/TaskList';

const App = () => {

  //Array Data Objects
  const Tasks = [
  {
    id:'t1',
    taskDate: new Date(2022, 6, 19),
    taskDesc: 'Data Tracker Creation',
   taskStatus : 'Work in progress',
  },
  {
    id:'t2',
    taskDate: new Date(2022, 6, 20),
    taskDesc: 'Data Tracker Modification',
    taskStatus : 'Done',
  },
];

  return (
    <div>
   <TaskList 
   taskDate={Tasks[0].taskDate}
   taskDesc={Tasks[0].taskDesc}
   taskStatus={Tasks[0].taskStatus}
   />
   <TaskList 
    taskDate={Tasks[1].taskDate}
    taskDesc={Tasks[1].taskDesc}
    taskStatus={Tasks[1].taskStatus}
   />
   </div>
  );
}

export default App;
