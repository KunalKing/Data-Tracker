import Task from './Components/Data/Task';
import UserFormUI from './Components/DataForm/UserFormUI';

const App = () => {
  const Tasks = [
    {
      id: 'e1',
      Task_Desc: 'Development',
      date: new Date(2020, 7, 14),
      Status: 'Wip',
    },
    { id: 'e2', 
    Task_Desc: 'Development',
    date: new Date(2020, 7, 14),
    Status: 'Wip', 
    },
    {
      id: 'e3',
      Task_Desc: 'Development',
      date: new Date(2020, 7, 14),
      Status: 'Wip',
    },
    {
      id: 'e4',
      Task_Desc: 'Development',
      date: new Date(2020, 7, 14),
      Status: 'Wip',
    },
  ];

  return (
    <div>
    < UserFormUI />
   <Task List={Tasks}/>
   </div>
  );
};

export default App;