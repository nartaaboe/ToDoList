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
    return (
        <div className="todo-list">
            {tasks.map(task => (
                <ToDoItem
                    key = {task.id}
                    task = {task}
                />
            ))}
            <input 
            value={text}
            onChange={e => setText(e.target.value)}
            />
            <button onClick={() => addTask(text)}>Add</button>
        </div>
    )
}

export default ToDoList;