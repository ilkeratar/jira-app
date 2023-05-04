import { useState,useContext } from "react";
import TasksContext from '../context/task';

function TaskCreate({task, taskFormUpdate,onUpdate }) {
  const {createTask}=useContext(TasksContext);

  const [title, setTitle] = useState(task ? task.title : '');
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : '');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTaskChange = (e) => {
    setTaskDesc(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(taskFormUpdate){
      onUpdate(task.id,title,taskDesc)
    }else{
      createTask(title, taskDesc);
    }
      setTitle("");
      setTaskDesc("");
    
  };

  return (
    <div>
      {taskFormUpdate ? (
        <div className="task-update">
          <h3>Update your task!</h3>
          <form className="task-form">
            <label className="task-label">Update Title</label>
            <input
              className="task-input"
              value={title}
              onChange={handleChange}
            />
            <label className="task-label">Update task</label>
            <textarea
              className="task-input"
              rows={5}
              value={taskDesc}
              onChange={handleTaskChange}
            />
            <button className="task-button update-button" onClick={handleSubmit}>
              Update
            </button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <h3>Please add a new task</h3>
          <form className="task-form">
            <label className="task-label">Title</label>
            <input
              className="task-input"
              value={title}
              onChange={handleChange}
            />
            <label className="task-label">Enter task</label>
            <textarea
              className="task-input"
              rows={5}
              value={taskDesc}
              onChange={handleTaskChange}
            />
            <button className="task-button" onClick={handleSubmit}>
              Create
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
