import React, { useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useReactToPrint } from 'react-to-print';
import NotFound from '../NotFound/NotFound';
import "./singleCem.css"

const SingleCem = ({ vetsArray, cemsArray}) => {
  const { id } = useParams(); 

  const info = useRef(); 
  const handlePrint = useReactToPrint({
    content: () => info.current
  })
  const cem = cemsArray.find(x => x._id === id); 

  if(cem){
    return (

      <div className="nagadb__singleCem-container section__padding">
        <div className="nagadb__singleCem-container__title">
          <h1>{cem.name}</h1>
          <button className='nagadb__print' onClick={handlePrint}>Export to PDF</button>
        </div>

        <div ref={info} className="nagadb__singleCem-container__info">
          <h2 className='hidden_name'>{cem.name}</h2>
          <h2><strong>Address:</strong>  {cem.location.address}</h2>
          <h2><strong>Map:</strong> <a href={cem.map}>{cem.map}</a></h2>
          <h2><strong>Phone:</strong> {cem.phone}</h2>
          <h2><strong>Website:</strong> <a href={cem.website}>{cem.website}</a></h2>
        </div>

        <div className="nagadb__singleCem-container__buttons">
          <Link to="/veterans">
            <button type='button'>View Veterans</button>
          </Link>
          <Link to="/cemeteries">
            <button type='button'> View cemeteries</button>
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

export default SingleCem