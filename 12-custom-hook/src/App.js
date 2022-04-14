import React, { useState, useEffect } from "react";
import useFecth from "./hooks/use-fetch";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";

function App() {
  const [tasks, setTasks] = useState([]);

  const { isLoading, error, sendRequest: fetchTasks } = useFecth();

  useEffect(() => {
    const requestHandler = (data) => {
      const keys = Object.keys(data);
      const tasks = keys.map((key) => {
        return { id: key, text: data[key].text };
      });
      setTasks(tasks);
    };
    fetchTasks(
      {
        url: "https://react-test-d6cb2-default-rtdb.firebaseio.com/tasks.json",
      },
      requestHandler
    );
  }, []);
  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };
  console.log("App evaluated");
  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
