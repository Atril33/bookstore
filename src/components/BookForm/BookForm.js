import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook, addNewBook } from '../../redux/books/booksSlice';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({
      item_id: uuidv4(),
      title,
      author,
      category,
    }))
      .then(() => dispatch(addNewBook({
        item_id: uuidv4(),
        category,
        title,
        author,
      })));
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <div className="form-wrap">
      <form onSubmit={handleSubmit} className="form-container">
        <label htmlFor="title">
          Add New Book
          <br />
          <input
            className="title"
            id="title"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br />
        <input
          className="author"
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <br />
        <select id="category" name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Please choose prefered category</option>
          <option value="fiction">Fiction</option>
          <option value="non-fiction">Non-Fiction</option>
          <option value="mystery">Mystery</option>
          <option value="sci-fi">Science Fiction</option>
        </select>
        <br />
        <button type="submit" className="submit">Submit</button>
      </form>
    </div>
  );
};

export default BookForm;
