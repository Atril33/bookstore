import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook, getBooks } from '../../redux/books/booksSlice';
import ProgressBar from './ProgressBar';

const BookAdd = () => {
  const { books, isLoading, error } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  if (isLoading) {
    return <p>please wait it is loading...</p>;
  }

  if (error) {
    return <p>Error occurred while fetching books</p>;
  }
  return (
    <div className="book-container">
      {books.map((book) => (
        <div className="books" key={book.item_id}>
          <div className="book-add">
            <h2 className="category">{book.category}</h2>
            <h1 className="title">{book.title}</h1>
            <h3 className="author">{book.author}</h3>
            <div className="bttns">
              <div className="bttn">Comments</div>
              <div
                className="bttn"
                onClick={() => {
                  dispatch(removeBook(book.item_id));
                }}
              >
                Remove
              </div>
              <div className="bttn">Edit</div>
            </div>
          </div>
          <div className="progress-bar">
            <ProgressBar />
            <ul className="pro-text">
              <li><h2>65%</h2></li>
              <li><p>Completed</p></li>
            </ul>
          </div>
          <div className="chapter-container">
            <ul>

              <li><h2 className="current-h2">Current Chapter</h2></li>
              <li><h3 className="chapter-h3">Chapter 17</h3></li>
              <li><h4 className="update-h4">Update Progress</h4></li>
            </ul>
          </div>
        </div>
      ))}

    </div>
  );
};

export default BookAdd;
