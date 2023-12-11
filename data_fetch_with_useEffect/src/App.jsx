import React, { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    setTodos(data);
  };
  return (
    <div>
        <section>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>title</th>
              <th>completed</th>
            </tr>
          </thead>
          <tbody>
              {
                todos.map(todo=>(
                  <tr key={todo.id}>
                    <td>{todo.id}</td>
                    <td>{todo.title}</td>
                    {
                      todo.completed ? (<p>Done</p>) : (<p className="none">None</p>)
                    }
                  </tr>
                ))
              }
          </tbody>
        </table>
  </section>
    </div>
  )
};

export default App;
