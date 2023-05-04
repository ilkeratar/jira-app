import { useState,useContext } from "react";
import TaskCreate from "./TaskCreate";
import TasksContext from '../context/task';



function TaskShow({task}) {
    const{deleteTaskById,editTaskById}=useContext(TasksContext);

    const [showEdit, setShowEdit] = useState(false);
    const handleDeleteClick=()=>{
        deleteTaskById(task.id);
    }

    const handleEditClick=()=>{
        setShowEdit(true);
    }
    const handleSubmit=(id,updatedTitle,updatedTaskDesc)=>{
        setShowEdit(false);
        editTaskById(id,updatedTitle,updatedTaskDesc);
    }

    return ( 
    <div className="task-show">
        {
        showEdit ? <TaskCreate task={task} taskFormUpdate={true} onUpdate={handleSubmit} /> : <div>
        <h3>Title</h3>
        <p>{task.title}</p>
        <h3>Description</h3>
        <p>{task.taskDesc}</p>
        <div>
            <button className="task-delete" onClick={handleDeleteClick}>Delete</button>
            <button className="task-edit" onClick={handleEditClick}>Update</button>
        </div>
        </div>
        }
        
        
    </div> 
    );
}

export default TaskShow;