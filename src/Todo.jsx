import { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (e) => {
    e.preventDefault();

    if (!task.trim()) return;

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const handleToggle = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.completed).length;

  return (
    <div className="w-[90%] md:w-150 mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Todo App</h2>
      <form onSubmit={handleAddTask} className="flex gap-2 mb-4">
        <input type="text"  value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter task..." className="border px-3 py-2 rounded w-full"/>
        <button type="submit" disabled={!task.trim()} className={`px-4 py-2 rounded font-semibold ${!task.trim() ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"}`} >Add</button>
      </form>

      <ul className="list-disc pl-5">
        {tasks.map((t) => (
          <li key={t.id} className={`flex justify-between items-center mb-2 ${ t.completed ? "line-through text-gray-400" : ""}`}>
            <span>{t.text}</span>
            <div className="flex gap-2">
              <button onClick={() => handleToggle(t.id)} className="text-green-600 font-bold" >{t.completed ? "Undo" : "Done"}
              </button>
              <button onClick={() => handleDelete(t.id)} className="text-red-600 font-bold">Delete</button>
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-4 font-semibold">Total Tasks: {totalTasks} | Completed: {completedTasks}</p>
    </div>
  );
}

export default Todo;