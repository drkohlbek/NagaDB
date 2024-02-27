import React from 'react'
import { VetTable } from '../../components'
import "./veterans.css"

const Veterans = ({ vetsArray, cemsArray }) => {
  return (
    <div className="nagadb__table-container">
      <div className="nagadb__table-container__title">
        <h1>Veterans</h1>
        <h3>Click on a name for more information.</h3>
      </div>
      <div className="nagadb__table-container__table">
        <VetTable vetsArray={vetsArray} cemsArray={cemsArray} />
      </div>
    </div>
  )
}

export default Veterans