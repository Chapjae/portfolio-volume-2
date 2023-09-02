import { Link, useLocation } from "react-router-dom"
import "../utils/styles/navbar.css"

const Navbar = () => {
  const currentPage = useLocation().pathname;
  
  return (
    <>
    <h1 className="fs-1 text-center">Jay's Portfolio!</h1>
    <ul className="nav nav-tabs justify-content-end" roles="tablist">
    <li className="nav-item" role="presentation">
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
    <li className="nav-item">
      <Link
      to="/resume"
      className={currentPage == "/resume" ? "nav-link active" : "nav-link"}
      >
        Resume
      </Link>
    </li>
    <li className="nav-item">
      <Link
      to="/portfolio"
      className={currentPage == "/portfolio" ? "nav-link active" : "nav-link"}
      >
        Portfolio
      </Link>
    </li>
   </ul> 
  </>
  )
}

export default Navbar