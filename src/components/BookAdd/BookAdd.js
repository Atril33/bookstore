import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook, getBooks } from '../../redux/books/booksSlice';

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
    <div className="book-wrap">
      {books.map((book) => (
        <div className="books" key={book.item_id}>
          <ul>
            <li>
              {book.category}
              {' '}
              <br />
              {' '}
              {book.title}
              {' '}
              By
              {' '}
              {book.author}
              {' '}
            </li>
            <button
              type="button"
              className="remove"
              onClick={() => {
                dispatch(removeBook(book.item_id));
              }}
            >
              Remove
            </button>

          </ul>
        </div>
      ))}
    </div>
  );
};

export default BookAdd;
