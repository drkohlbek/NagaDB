import React from 'react'
import './about.css'
import { Feature } from '../../components'

const About = () => {
  return (
    <div className="nagadb__about section__padding" id='about'>
      <div className="nagadb__about-feature">
        <Feature title="What is NagaDB?" text="NagaDB is a collection of all unclaimed veterans identified by the non-profit corporation Project NAGA® as part of our mission to document the lives, accomplishments, and history to honor veterans of the past, present, and future."/>
      </div>
      <div className="nagadb__about-container"> 
        <Feature title="Our Misson" text="Project Naga®, Inc. shall promote the use of technology for honoring veterans and work toward the continued stewardship of the history of veterans and his or her accomplishmetns." />
        <Feature title="How Can I Help?" text="Visit our website at www.projectnaga.org see how you can help us honor veterans." />
      </div>
    </div>
    
  )
}

export default About