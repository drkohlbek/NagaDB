import React from 'react'
import { About, Header, Links } from '../../containers'; 
import { Stats } from '../../components'; 

const Home = ({ vets, cems }) => {
  return (
    <>  
      <Header />
      <Stats vets={vets} cems={cems} />
      <About /> 
      <Links /> 
    </>
  )
}

export default Home