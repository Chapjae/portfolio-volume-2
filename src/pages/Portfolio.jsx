import Project from "../components/Project"
import projects from "../utils/projects.json"

const Portfolio = () => {
  return (
    <>
    {projects.map(project => (
      <Project{...project}/>
    ))}
    </>
    )
}

export default Portfolio