import React, { useEffect, useState } from "react";
//import "./App.css";
import "./components/Template.css";
import Template from "./components/Template";
import TodoList from "./components/TodoList";
import { MdAddCircle } from "react-icons/md";
import TodoInsert from "./components/TodoInsert";

let nextId = 4;

const App = () => {
  const [completeNumber, setCompleteNumber] = useState(2); // -> 초기값이 2인 이유는, 아래 todos 배열에서 checked인 객체가 2개로 시작하기 때문.
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "할일 1",
      checked: true,
    },
    {
      id: 2,
      text: "할일 2",
      checked: false,
    },
    {
      id: 3,
      text: "할일 3",
      checked: true,
    },
  ]);

  useEffect(() => {
    //setCompleteNumber(() => todos.filter((todo) => todo.checked).length); // -> filter를 사용하는 법
    setCompleteNumber(
      () => todos.reduce((acc, cur) => (cur.checked ? (acc += 1) : acc), 0) // -> reduce를 사용하는 법. acc: 0부터 시작하는 누적값, cur: 현재 인덱스
    );
    // console.log(22) // -> 이 useEffect가 실행되는지 확인하고 싶을때 콘솔창에 찍어보기
  }, [todos]); // -> [](defendency)가 랜더될때, 변할때마다 useEffect가 실행

  // useEffect(() => { // -> completeNumber가 변하고 있는지 콘솔창에 찍어보고싶을 때 사용
  //   console.log(completeNumber);
  // }, [completeNumber]);

  const onInsertToggle = () => {
    if (selectedTodo) {
      setSelectedTodo(null);
    }
    setInsertToggle((prev) => !prev);
  };

  const onInsertTodo = (text) => {
    if (text === "") {
      return alert("할 일을 입력해주세요 :)");
    } else {
      const todo = {
        id: nextId,
        text,
        checked: false,
      };
      setTodos((todos) => todos.concat(todo));
      nextId++;
    }
  };

  const onCheckToggle = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const onChangeSelectedTodo = (todo) => {
    setSelectedTodo(todo);
  };

  const onRemove = (id) => {
    onInsertToggle();
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const onUpdate = (id, text) => {
    onInsertToggle();
    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    );
  };

  return (
    <Template todoLength={todos.length} completeNumber={completeNumber}>
      <TodoList
        todos={todos}
        onCheckToggle={onCheckToggle}
        onInsertToggle={onInsertToggle}
        onChangeSelectedTodo={onChangeSelectedTodo}
      />
      <div className="add-todo-button" onClick={onInsertToggle}>
        <MdAddCircle />
      </div>
      {insertToggle && (
        <TodoInsert
          selectedTodo={selectedTodo}
          onInsertToggle={onInsertToggle}
          onInsertTodo={onInsertTodo}
          onRemove={onRemove}
          onUpdate={onUpdate}
        />
      )}
    </Template>
  );
};

export default App;
