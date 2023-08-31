import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
  const currentPage = useLocation().pathname;
  
  return (
   <ul className="nav nav-tabs">
    <li className="nav-item">
      <Link
      to="/"
      className={currentPage == '/' ? 'nav-link active' : 'nav-link'}
      >
        About Me
      </Link>
    </li>
    <li className="nav-item">
      <Link
      to="/contact"
      className={currentPage == "/contact" ? 'nav-link active' : 'nav-link'}
      >
        Contact
      </Link>
    </li>
   </ul>
  )
}

export default Navbar