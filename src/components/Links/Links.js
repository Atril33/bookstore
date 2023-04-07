import { Link } from 'react-router-dom';

const MyLinks = () => (
  <>
    <ul className="link-holder">
      <li className="links"><Link to="/">Bookstore CMS</Link></li>
      <li className="links"><Link to="/">Books</Link></li>
      <li className="links"><Link to="/category">Categories</Link></li>
    </ul>
  </>
);

export default MyLinks;
