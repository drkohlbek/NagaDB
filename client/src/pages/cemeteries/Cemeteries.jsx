import React from 'react'
import { CemTable } from '../../components'
import "./cemeteries.css"

const Cemeteries = ({ vetsArray, cemsArray }) => {
  return (
    <div className="nagadb__table-container">
      <div className="nagadb__table-container__title">
        <h1>Cemeteries</h1>
        <h3>Click on a cemetery for more information.</h3>
      </div>
      <div className="nagadb__table-container__table">
        <CemTable vetsArray={vetsArray} cemsArray={cemsArray} />
      </div>
    </div>
  )
}

export default Cemeteries