import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from '@mui/icons-material/School';
// import "../styles/Experience.css"
import WorkIcon from '@mui/icons-material/Work';

const Experience = () => {
  return (
    <div className="experience">
      <VerticalTimeline lineColor = "#3e497a">
        
        <VerticalTimelineElement 
        className="vertical-timeline-element--education"
        date="2017 - 2021"
        iconStyle={{background:"#3e497a", color:"#fff" }}
        icon = {<SchoolIcon/>}>
          <h3 className="vertical-timeline-element-title">
          BRAC University, Bangladesh
          </h3>
          <p> BSc, Computer Science and Engineering</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className="vertical-timeline-element--work"
        date="2021 - 2023 (May)"
        iconStyle={{background:"#e9d35b", color:"#fff" }}
        icon = {<WorkIcon/>}>
          <h3 className="vertical-timeline-element-title">
          Research Assistant, Big Data Computing Lab  
          </h3>
          <h4 className = "vertical-timeline-element-subtitle">
            University of Nebraska Omaha, NE
          </h4>
          <h5> Developed text-based machine learning models for NSF Track-2 collaborators</h5>
          <h5> Performed training and fine-tuning using various language models: BERT, spaCy, and GPT</h5>
          <h5> Conducted data mining and data pre-processing techniques from unstructured data to build high quality dataset</h5>
          
        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className="vertical-timeline-element--education"
        date="2021 - Present"
        iconStyle={{background:"#3e497a", color:"#fff" }}
        icon = {<SchoolIcon/>}>
          <h3 className="vertical-timeline-element-title">
          University of Nebraska Omaha 
          </h3>
          {/* <h4 className = "vertical-timeline-element-subtitle">
            MS
          </h4> */}
          <p>MS, Computer Science</p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  )
}

export default Experience