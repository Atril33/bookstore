import { useState } from 'react';
import InputTodo from './TodoInput';
import TodosList from './TodosList';

const TodosLogic = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: 2,
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: 3,
      title: 'Deploy to live server',
      completed: false,
    },
  ]);
  const handleChange = (id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };
    /* eslint-disable */
  const delTodo = (id) => {
  };
  const addTodoItem = (title) => {
    const newTodo = {
      id: 4,
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };
  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          /* eslint-disable */
          todo.title = updatedTitle;
        }
        return todo;
      }),
    );
  };
  return (
    <center>
      <div className="myTodo">
        <InputTodo addTodoItem={addTodoItem} />

        <TodosList
          todosProps={todos}
          handleChange={handleChange}
          delTodo={delTodo}
          setUpdate={setUpdate}
        />
      </div>
    </center>
  );
};
export default TodosLogic;
