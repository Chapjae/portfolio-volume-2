import { Link } from "react-router-dom"
import "../utils/styles/resume.css"
const Resume = () => {

  return (
    <div>
   
    <h3>My "Skills"</h3>
    <ul> 
      <li>Acting</li>
      <li>Gaming</li>
      <li>Guitar</li>
      <li>Programming?</li>
    </ul>
    <Link to={"/JayLiuResume.pdf"} target="_blank" download>Download My Resume</Link>
    </div>
  )
}

export default Resume