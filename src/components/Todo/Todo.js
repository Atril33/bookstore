import '../style/Style.css';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, removeBook } from '../../redux/books/bookSlice';

const MyTodo = () => {
  const { bookData } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newBook = {
      id: formData.get('item_id'),
      title: formData.get('title'),
      author: formData.get('author'),
    };
    dispatch(addBook(newBook));
  };
  return (
    <>
      <div className="container">

        {bookData.map((item) => (
          <div key={item.item_id}>
            <h2>{item.title}</h2>
            <p>
              By
              {item.author}
            </p>
            <button type="button" id="remove" onClick={() => dispatch(removeBook())}>Remove</button>
          </div>
        ))}
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" placeholder="Title" />
          <br />
          <input type="text" name="author" placeholder="Author" />
          <br />
          <button type="submit">Add Book</button>
        </form>
      </div>
    </>
  );
};

export default MyTodo;
