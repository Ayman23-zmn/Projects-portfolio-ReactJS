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
          <h5> Developed text-based machine learning models for <a href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=1920954&HistoricalAwards=false" target= "blank"> NSF Track-2</a> projects</h5>
          <h5> Trained and fine-tuned machine learning models over various language frameworks: BERT, spaCy, and GPT</h5>
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