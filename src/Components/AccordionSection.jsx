import downArrow from "../assets/downArrow.png"
// import upArrow from "../assets/upArrow.png"
import "./AccordionSection.css"

export default function AccordionSection(props) {
  return (
    <div className="accordion-container">
          <div className="title-section">
            <p className="title-text-styles">{props.title}</p>
            <img src={downArrow} alt="Down Arrow" />
          </div>
      <p className="sub-text-styles">{props.subText}</p>
    </div>
    )
}
