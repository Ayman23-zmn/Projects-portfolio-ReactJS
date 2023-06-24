import { LinkedIn } from "@mui/icons-material"
import { GitHub } from "@mui/icons-material"
import { Email } from "@mui/icons-material"
import "../styles/Footer.css"




const Footer = () => {

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
    <div className="footer">
        <div className="socialMedia">
            <LinkedIn onClick = {handleLinkedInClick}/>
            <GitHub onClick = {handleGitHubClick}/>
            <Email onClick = {handleEmailClick}/>
        </div>
        <p> &copy; 2023 Ayman Ibn Jaman</p>
    </div>
  )
}

export default Footer