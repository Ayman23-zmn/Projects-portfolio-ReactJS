import {LinkedIn} from "@mui/icons-material"
import { Email } from "@mui/icons-material"
import { GitHub } from "@mui/icons-material"
import "../styles/Home.css"


const Home = () => {

  const handleLinkedInClick = () => {
    // Logic to open LinkedIn profile link in a new tab
    window.open("https://www.linkedin.com/in/ayman-jaman-44818220b/", "_blank");
  };
  
  const handleEmailClick = () => {
    const email = "ajaman@unomaha.edu";
    navigator.clipboard.writeText(email)
      .then(() => {
        alert("Email copied to clipboard");
      })
      .catch((error) => {
        console.error("Error copying email to clipboard:", error);
      });
  };
  
  const handleGitHubClick = () => {
    // Logic to open GitHub profile link in a new tab
    window.open("https://github.com/Ayman23-zmn?tab=repositories", "_blank");
  }


  return (
    <div className="home">
      <div className="about">
        <h2>Hi, this is Ayman</h2>
        <div className="prompt">
          <p>I am a software engineer with an aspiration of learning and deploying creative applications</p>
          <LinkedIn onClick = {handleLinkedInClick}/>
          <Email onClick = {handleEmailClick}/>
          <GitHub onClick = {handleGitHubClick}/>
        </div>
      </div>

      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              ReactJS, HTML,CSS, NPM
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, MongoDB
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>
              Javascript, Python, Java
            </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home