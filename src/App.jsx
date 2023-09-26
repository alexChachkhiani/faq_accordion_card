import { useState } from 'react'
import './App.css'
import AccordionSection from './Components/AccordionSection'

function App() {

  const accordionArr = [
    {
      title: "How many team members can I invite?",
      subText: "You can invite unlimited amount of team members.",
      id: 1
    }, {
      title: "What is the maximum file upload size?",
      subText: "No more than 2GB. All files in your account must fit your allotted storage space.",
      id: 2
    },{
      title: "How do I reset my password?",
      subText: "You can click on reset password button.",
      id: 3
    },{
      title: "Can I cancel my subscription?",
      subText: "Yes, you can cancel your subscription anytime.",
      id: 4
    },{
      title: "Do you provide additional support?",
      subText: "For additional support message us on our website.",
      id: 5
    }
  ]

  return (
    <div className="main-container">
      <div>
        {accordionArr.map((item) => {
          return <AccordionSection title={item.title} subText={item.subText} id={item.id} />
        })}
      </div>
    </div>
  )
}

export default App
