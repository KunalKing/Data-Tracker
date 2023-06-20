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
   Tasks={Tasks[0]}
   />
   <TaskList 
   Tasks={Tasks[1]}
   />
   </div>
  );
}

export default App;
