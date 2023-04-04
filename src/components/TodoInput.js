import { useState } from 'react';
/* eslint-disable */
const InputTodo = ({ addTodoItem }) => {
  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodoItem(title);
    setTitle('');
  };
  return (

    <>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="Add Todo..."
          value={title}
          onChange={handleChange}
          className="input-text"
        />
        <button className="input-submit" type="button">Submit</button>
      </form>
      {/*  <span className="submit-warning">{message}</span> */}
    </>
  );
};
export default InputTodo;
