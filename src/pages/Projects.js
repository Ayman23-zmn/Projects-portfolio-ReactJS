import ProjectItem from "../components/ProjectItem"
import "../styles/Projects.css"
import {ProjectList} from "../helpers/ProjectList"

 


const Projects = () => {
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project,idx)=>{
          return <ProjectItem 
          id = {idx}
          name={project.name} 
          image = {project.image}
          demoLink = {project.demoLink}
          sourceCodeLink={project.sourceCodeLink}/>
        })}
      </div>
    </div>
  )
}

export default Projects