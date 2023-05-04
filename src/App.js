import './App.css';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';

import {useEffect,useContext } from 'react';
import TasksContext from './context/task';

function App() {
  const {fetchTasks,tasks} = useContext(TasksContext);
  
  useEffect(()=>{
    fetchTasks() 
  },[tasks])

  return (
    <div className="App">
      <TaskCreate/>
      <h1>Tasks</h1>
      <TaskList/>
    </div>
  );
}

export default App;
