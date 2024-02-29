import React, { useRef } from 'react'
import "./singleVet.css"
import { useParams, Link } from 'react-router-dom'; 
import { useReactToPrint } from 'react-to-print'; 
import NotFound from '../NotFound/NotFound';


const SingleVet = ({ vetsArray, cemsArray }) => {
  const { id } = useParams()

  const info = useRef(); 
  const handlePrint = useReactToPrint({
    content: () => info.current
  })
  
  const vet = vetsArray.find(x => x._id === id); 



  if(vet) {
    return (

      <div className="nagadb__singleVet-container section__padding">
        <div className="nagadb__singleVet-container__title">
          <h1>{vet.firstName} {vet.middleName} {vet.lastName}</h1>
          <button className='nagadb__print' onClick={handlePrint}>Export to PDF</button>
        </div>
        
        <div ref={info} className="nagadb__singleVet-container__info">
          
          <h2 className='hidden_name'>{vet.firstName} {vet.middleName} {vet.lastName}</h2>
          <h2><strong>Rank:</strong> {vet.rank}</h2>
          <h2><strong>Branch:</strong> {vet.branch}</h2>
          <h2><strong>War Period:</strong> {vet.warPeriod}</h2>
          <h2><strong>Date of Birth:</strong> {vet.DOB}</h2>
          <h2><strong>Date of Death:</strong> {vet.DOD}</h2>
          <h2><strong>Cemetery:</strong> {vet.cemetery.name}</h2>
          <h2><strong>Location:</strong> {vet.location}</h2>
        </div>
        <div className="nagadb__singleVet-container__cemeteryInfo">
          <Link to={`/cemeteries/${vet.cemetery.id}`}>
            <button type='button'>
              View Cemetery Info
            </button>
          </Link>
        </div>
        <div className="nagadb__singleVet-container__buttons">
          <Link to="/veterans">
            <button type='button'>View Veterans</button>
          </Link>
          <Link to="/cemeteries">
            <button type='button'>View Cemeteries</button>
          </Link>
        </div>
      </div>
      
    ) 
  }

  return (
    <>
      <NotFound />
    </>
  )
}

export default SingleVet