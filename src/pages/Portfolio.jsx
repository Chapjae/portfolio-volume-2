import Project from "../components/Project"
import projects from "../utils/projects.json"

const styles ={
  width: {
    width: "100%"
  }
}

const Portfolio = () => {
  return (
    <>
    <div className="container justify-content-center">
    <div className="card-deck">
    {projects.map(project => (
    <div className="">
      <Project
      {...project}/>
    </div>
      ))}
    </div>
    </div>
    </>
    )
}

export default Portfolio