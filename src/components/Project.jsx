const Project = ({deployed, title, image, githublink}) => {
  return(
    <div class="container text-center">
      <div class="row">
      <a href={deployed} target="_blank">{title} Deployed
      <img src={image} class="rounded float-start"/>
      </a>
      <a href={githublink} target="_blank">{title} Repo</a>
      </div>
    </div>
    )

}

export default Project

