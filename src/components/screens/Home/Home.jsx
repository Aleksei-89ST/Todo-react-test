import React, { useState } from "react";
import TodoItem from "./item/TodoItem";


  const data = [
    {
      id:'d4d34dj938jd',
      title: "Finish the essay collaboration",
      isCompleted: false,
    },
    {
      id:'nuic38yf34fy837g',
      title: "Read next chapter of the book",
      isCompleted: false,
    },
    {
      id:'mejf893h893fh',
      title: "Send the fineshed assignment",
      isCompleted: false,
    },
  ];
  const Home = () => {
    const [todos,setTodos] = useState(data)
    const changeTodo = (id) => {
      const copy = [...todos]
      const current = copy.find(t => t.id === id)
      current.isCompleted = !current.isCompleted
      setTodos(copy)
    }
console.log(todos)
  return (
    <div className="text-white w-4/5 mx-auto">
      <h1 className="text-2xl font-bold text-center mb-10">Тестовое задание Frontend intern в Mindbox </h1>
      {data.map((todo) => (
        <TodoItem key={todo.id} todo={todo} changeTodo={changeTodo} />
      ))}
    </div>
  );
};

export default Home;
