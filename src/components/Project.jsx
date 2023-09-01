const Project = ({deployed, title, image, githublink}) => {
  return(
    <>
      <a href={deployed} target="_blank">{title} Deployed
      <img src={image}/>
      </a>
      <a href={githublink} target="_blank">{title} Repo</a>
    </>
    )

}

export default Project

