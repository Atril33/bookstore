import { Routes, Route } from 'react-router-dom';
import './components/style/Style.css';
import MyCategories from './components/Categories/Categories';
import MyTodo from './components/Todo/Todo';
import MyLinks from './components/Links/Links';

const TodoApp = () => (
  <>
    <MyLinks />
    <Routes>
      <Route path="/" element={<MyTodo />} />
      <Route path="/category" element={<MyCategories />} />
    </Routes>
  </>
);
export default TodoApp;
