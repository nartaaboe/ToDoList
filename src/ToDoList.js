import { useState } from "react";
import ToDoItem from './ToDoItem.js';

function ToDoList(){
    const[tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Pray',
            completed: false
        }
    ]);
    const[text, setText] = useState('');
    function addTask(text){
        const newTask = {
            id: Date.now(),
            text,
            completed: false
        };
        setTasks([...tasks, newTask]);
        setText('');
    }
    function deleteTask(id){
        setTasks(tasks.filter(task => task.id !== id));
    }
    function toggleCompleted(id){
        setTasks(tasks.map(task => {
            if(task.id === id)
                return {...task, completed: !task.completed};
            return task;
        }));
    }
    return (
        <div className="todo-list">
            <div className="add-task">
                <input
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
                <button onClick={() => addTask(text)}>Add</button>
            </div>
            <div className="todo-item-detail">
                {tasks.map(task => (
                    <ToDoItem
                        key={task.id}
                        task={task}
                        deleteTask={deleteTask}
                        toggleCompleted={toggleCompleted}
                    />
                ))}
            </div>
        </div>
    )
}

export default ToDoList;