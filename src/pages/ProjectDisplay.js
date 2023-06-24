import {useParams} from "react-router-dom"
import { ProjectList } from "../helpers/ProjectList"
// import { GitHub } from "@mui/icons-material"
import "../styles/ProjectDisplay.css"



const ProjectDisplay = () => { 
  
  const {id} = useParams()
  const project = ProjectList[id]
  
  return (
    <div className="project">
        <h1>{project.name} </h1>
        <img src ={project.image}/>
        <p>
          <b>Skills:</b> {project.skills}
        </p>
        <div className="buttons">
        <a 
        href={project.demoLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="demo-button">
          Demo
        </a>
        <a 
        href={project.sourceCodeLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="source-code-button">
          Source Code
        </a>
      </div>
    </div>
  )
}

export default ProjectDisplay