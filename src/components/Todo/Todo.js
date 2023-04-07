import '../style/Style.css';

const MyTodo = () => {
  const data = [
    {
      id: 1,
      title: 'Setup development environment',
      author: 'Syed',
    },
    {
      id: 2,
      title: 'Develop website and add content',
      author: 'Atril',
    },
    {
      id: 3,
      title: 'Deploy to live server',
      author: 'Syed Atril',
    },
  ];
  return (
    <>

      <div className="container">
        {data.map((item) => (
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
