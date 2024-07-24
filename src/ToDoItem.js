function ToDoItem({task}){
    return (
        <div className="todo-item">
            <input
            type="checkbox"
            checked={task.completed}
            />
            <p>{task.text}</p>
        </div>
    )
}

export default ToDoItem;