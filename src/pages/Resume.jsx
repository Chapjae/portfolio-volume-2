import { Link } from "react-router-dom"

const Resume = () => {

  return (
    <>
    <Link to={"/JayLiuResume.pdf"} target="_blank" download>Download My Resume</Link>
    </>
  )
}

export default Resume