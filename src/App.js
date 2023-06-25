import Task from './Components/Data/Task';

function App() {
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
   <Task List={Tasks}/>
  );
};

export default App;