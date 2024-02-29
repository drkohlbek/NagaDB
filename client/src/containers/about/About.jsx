import React from "react";
import "./about.css";
import { Feature } from "../../components";

const About = () => {
  return (
    <div className="nagadb__about" id="about">
      <div className="nagadb__about-what section__padding">
        <div className="nagadb__about-what__content">
          <div className="nagadb__about-what-text">
            <h1>What is NagaDB?</h1>
            <p>
              NagaDB serves as a comprehensive repository created by Project
              NAGA®, a non-profit organization, encompassing all unclaimed
              veterans. Our primary goal is to document the legacies,
              achievements, and narratives of veterans spanning across
              generations, as a tribute to their enduring service and sacrifice.
              This open-source initiative seeks to unite communities, fostering
              collaboration towards the establishment of an easily accessible
              database housing unclaimed veterans' records.
            </p>
          </div>
          <div className="nagadb__about-what-image"></div>
        </div>
      </div>
      <div className="nagadb__about-mission section__padding">
        <div className="nagadb__about-mission__content">
          <div className="nagadb__about-mission-text">
            <h1>Our Misson</h1>
            <p>
              Project NAGA®, Inc. shall promote the use of technology for honoring
              Veterans and work toward the continued stewardship of the history of
              Veterans and his or her accomplishments. Furthermore, Project NAGA®,
              Inc. will work in partnership with private individuals,
              environmental and recreational organizations, and government
              agencies at local, county, state, and federal levels. Critically,
              Project NAGA®, Inc. shall work with other organizations toward the
              goal of ensuring all Veterans are buried with honor, recognition,
              and respect.
            </p>
          </div>
          <div className="nagadb__about-mission-image"></div>
        </div>
      </div>
      <div className="nagadb__about-why section__padding">
        <div className="nagadb__about-why__content">
          <div className="nagadb__about-why-text">
            <h1>Why Does it Matter?</h1>
            <p>
              As the saying goes, "A person dies twice; once when they take their
              final breath, and later, the last time their name is spoke." This
              sentiment rings particularly true for veterans. This platform stands
              as a testament to ensuring that their names endure in history,
              preserving their memory for generations to come.
            </p>
          </div>
          <div className="nagadb__about-why-image"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
