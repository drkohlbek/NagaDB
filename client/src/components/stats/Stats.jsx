import React from 'react'
import './stats.css'; 
import { Link } from 'react-router-dom';

const Stats = ({ vets, cems }) => {
  return (
    <div className="nagadb__stats" section__padding>
      <div className="nagadb__stats-content">
        <div className="nagadb__stats-content__stat">
          <Link to="/veterans">
            <h2>{vets}</h2>
            <p>Veterans ➞</p>
          </Link>
        </div>
        <div className="nagadb__stats-content__stat">
          <Link to="/cemeteries">
            <h2>{cems}</h2>
       
              <p>Cemeteries</p>  
            
            <p>across the U.S. ➞</p>
          </Link>
        </div>
        <div className="nagadb__stats-content__stat">
          <Link to="/veterans">
            <h2>1</h2>
            <p>Open-sourced</p>
            <p>database ➞</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Stats