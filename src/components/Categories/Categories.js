import { useSelector } from 'react-redux';

const MyCategories = () => {
  const myCategorie = useSelector((store) => store.categories.bookName);

  return (
    <>
      <h1>{myCategorie}</h1>
      <button type="button" className="button-status">Check Status</button>
    </>
  );
};
export default MyCategories;
