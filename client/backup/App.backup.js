import React, { useState, useEffect } from 'react' 
import { Home, Veterans, Cemeteries } from './pages';
import { Navbar } from './components';
import { Footer } from './containers';
import './App.css'; 
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; 


const App = () => {
  const [veterans, setVeterans] = useState(null)
  const [cemeteries, setCemeteries] = useState(null)

  useEffect(() => {
    const fetchVeterans = async () => {
      const response = await fetch("/api/vets");
      const json = await response.json()

      if (response.ok) {
        setVeterans(json)
      }
    }

    const fetchCemeteries = async () => {
      const response = await fetch("/api/gravesites"); 
      const json = await response.json()

      if(response.ok) {
        setCemeteries(json)
      }
    }

    fetchCemeteries(); 
    fetchVeterans();
  }, [])

  let vets = null; 
  let cems = null;
  if(veterans && cemeteries) {
    vets = veterans
    cems = cemeteries 
  }

  console.log(veterans); 

  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home vets={vets.length} cems={cems.length} />} />
          <Route path="/veterans" element={<Veterans vetsArray={vets} cemsArray={cems} />} />
          <Route path="/cemeteries" element={<Cemeteries />} />
          <Route path='/naga' Component={() => {
            <Navigate to="/" />
            window.location.href = 'https://www.projectnaga.org';
            return null; 
          }} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App