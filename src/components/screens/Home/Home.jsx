import React from "react";
import TodoItem from "./item/TodoItem";

const Home = () => {
  const todos = [
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
  return (
    <div className="bg-slate-600 h-screen text-ellipsis">
      <h1 className="text-2x1 font-bold text-center mb-10">Тестовое задание Frontend intern в Mindbox </h1>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo}/>
      ))}
    </div>
  );
};

export default Home;
