import '../style/Style.css';
import { useSelector } from 'react-redux';

const MyTodo = () => {
  const { bookData } = useSelector((store) => store.user);
  return (
    <>
      <div className="container">

        {bookData.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>
              By
              {item.author}
            </p>
            <button type="button" id="remove">Remove</button>
          </div>
        ))}

        <input type="text" id="title" placeholder="Your Title Here..." />
        <br />
        <input type="text" id="name" placeholder="Your Name Here..." />
        <br />
        <button type="submit">Add Book</button>
      </div>
    </>
  );
};

export default MyTodo;
