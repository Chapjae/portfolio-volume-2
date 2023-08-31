import { Link } from "react-router-dom"

const Resume = () => {

  return (
    <>
    My "Skills"
    <ul>
      <li>Acting</li>
      <li>Gaming</li>
      <li>Guitar</li>
      <li>Programming?</li>
    </ul>
    <Link to={"/JayLiuResume.pdf"} target="_blank" download>Download My Resume</Link>
    </>
  )
}

export default Resume