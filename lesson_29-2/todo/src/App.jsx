import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./redux/store";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";

export function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const count = useSelector((state) => state.count);
  const [task, setTask] = React.useState("");

  const handleAddTodo = () => {
    if (task.trim()) {
      dispatch(addTodo(task));
      setTask("");
    }
  };

  return (
    <div>
      <Header task={task} setTask={setTask} addTodo={handleAddTodo} />
      <Content todos={todos} />
      <Footer count={count} />
    </div>
  );
}
