import './App.css';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState(["Setup Jenkins", "Learn CI/CD"]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>This is my Jenkins CI/CD Demo App</h1>

      <input
        type="text"
        placeholder="New task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
