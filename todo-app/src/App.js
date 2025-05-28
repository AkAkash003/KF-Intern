import React, { useState } from "react";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddTask = () => {
    if (input.trim() === "") return;

    if (editingIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editingIndex].text = input;
      setTasks(updatedTasks);
      setEditingIndex(null);
    } else {
      setTasks([...tasks, { text: input, completed: false }]);
    }

    setInput("");
  };

  const handleEditTask = (index) => {
    setInput(tasks[index].text);
    setEditingIndex(index);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    setInput("");
    setEditingIndex(null);
  };

  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const styles = {
    container: {
      maxWidth: "400px",
      margin: "50px auto",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "10px",
      fontFamily: "Arial",
    },
    title: {
      textAlign: "center",
      marginBottom: "20px",
    },
    inputContainer: {
      display: "flex",
      gap: "10px",
      marginBottom: "20px",
    },
    input: {
      flex: 1,
      padding: "8px",
      borderRadius: "5px",
      border: "1px solid #ccc",
    },
    button: {
      padding: "8px 16px",
      border: "none",
      borderRadius: "5px",
      backgroundColor: "#007bff",
      color: "#fff",
      cursor: "pointer",
    },
    taskList: {
      listStyleType: "none",
      padding: 0,
    },
    taskItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "8px",
      borderBottom: "1px solid #ddd",
    },
    leftSection: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      flex: 1,
    },
    taskText: (completed) => ({
      textDecoration: completed ? "line-through" : "none",
      color: completed ? "gray" : "black",
    }),
    editBtn: {
      color: "#ff9800",
      marginRight: "10px",
      cursor: "pointer",
    },
    deleteBtn: {
      color: "#f44336",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Todo List</h2>

      <div style={styles.inputContainer}>
        <input
          type="text"
          style={styles.input}
          placeholder="Enter a task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button style={styles.button} onClick={handleAddTask}>
          {editingIndex !== null ? "Update" : "Add"}
        </button>
      </div>

      <ul style={styles.taskList}>
        {tasks.map((task, index) => (
          <li key={index} style={styles.taskItem}>
            <div style={styles.leftSection}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(index)}
              />
              <span style={styles.taskText(task.completed)}>{task.text}</span>
            </div>
            <div>
              <button style={styles.editBtn} onClick={() => handleEditTask(index)}>
                Edit
              </button>
              <button style={styles.deleteBtn} onClick={() => handleDeleteTask(index)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
