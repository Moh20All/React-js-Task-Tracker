import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
function App() {
  //toggle add form usestate
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const taskFromServer = await fetchData();
      setTasks(taskFromServer);
    };
    getTasks();
  }, []);

  //fetch data from json server
  const fetchData = async () => {
    const res = await fetch("http://localhost:500/tasks");
    const data = await res.json();
    console.log("data", data);
    return data;
  };
  // Toggle remider
  const fetchTask = async (id) => {
    const response = await fetch(`http://localhost:500/tasks/${id}`);
    const updatedTask = await response.json();
    return updatedTask;
  };
  //Delete Task
  const DeleteTask = async (id) => {
    await fetch(`http://localhost:500/tasks/${id}`, {
      method: "DELETE",
    });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle Reminder
  const ToggleReminder = async (id) => {
    //fetch from server
    const updatedTask = await fetchTask(id);
    const upTask = { ...updatedTask, reminder: !updatedTask.reminder };
    console.log(upTask);
    // put in server
    const res = await fetch(`http://localhost:500/tasks/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(upTask),
    });

    const data = await res.json();
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: task.reminder } : task
      )
    );
  };
  // Add Task
  const addTask = async (task) => {
    const res = await fetch("http://localhost:500/tasks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    setTasks([...tasks, data]);
    // const newId = Math.floor(Math.random() * 64);
    // Create new object
    // const newTask = { ...task, id: newId };
    // Push it into array and update state with this new value
    // setTasks([...tasks, newTask]);
    for (let i = 0; i < 100000000; i++) {}
    setShowForm(!showForm);
  };
  return (
    <div className="App">
      <Header
        title="Task Tracker"
        onShow={() => setShowForm(!showForm)}
        showOn={showForm}
      />
      {showForm && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={DeleteTask} onToggle={ToggleReminder} />
      ) : (
        "No tasks to show"
      )}
    </div>
  );
}

export default App;
