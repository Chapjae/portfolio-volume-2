const Project = ({deployed, title, image, githublink}) => {
  return(
    <div>
      <div className="card col-6">
      <img src={image} class="card-img-top" style={{"height" :"100%", "width" : "100%"}}/>
      <a className="btn btn-primary" href={deployed} target="_blank">{title} Deployed</a>
      <a className="btn btn-secondary" href={githublink} target="_blank">{title} Repo</a>
      </div>
    </div>
    )

}

export default Project

