import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
  const currentPage = useLocation().pathname;
  
  return (
    <>
   <ul className="nav nav-tabs" roles="tablist">
    <span className="nav-brand navbar-text fs-1">Jay's Portfolio!</span>
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