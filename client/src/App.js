import React, { useState, useEffect } from 'react' 
import { Home, Veterans, Cemeteries, SingleVet, SingleCem, NotFound } from './pages';
import { Navbar } from './components';
import { Footer } from './containers';
import './App.css'; 
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; 
import axios, { AxiosCatch } from 'axios';


const App = () => {
  const [veterans, setVeterans] = useState([])
  const [cemeteries, setCemeteries] = useState([])
  const [isLoading, setLoading] = useState(true); 

  const fetchVets = async () => {
    try{
      const response = await axios.get(`${process.env.REACT_APP_API}/api/vets`);
      setLoading(false)
      setVeterans(response.data); 
    } catch (error) {
      console.log(error); 
    }
  }

  const fetchCems = async () => {
    try{ 
      const response = await axios.get(`${process.env.REACT_APP_API}/api/gravesites`);
      setLoading(false); 
      setCemeteries(response.data);
    } catch (error) {
      console.log(error); 
    }
    
  }

  useEffect(() => {
  
    fetchVets();
    fetchCems(); 

  }, [])


  if(isLoading){ 
    return <div className='App'></div>
  }
 

  return (
    <Router>
      <body>
       
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home vets={veterans.length} cems={cemeteries.length} />} />
          <Route path="/veterans" element={<Veterans vetsArray={veterans.length > 0 ? veterans : []} cemsArray={cemeteries} />} />
          <Route path="/cemeteries" element={<Cemeteries vetsArray={veterans} cemsArray={cemeteries} />} />
          <Route path="/veterans/:id" element={<SingleVet vetsArray={veterans} cemsArray={cemeteries} />} />
          <Route path='/cemeteries/:id' element={<SingleCem vetsArray={veterans} cemsArray={cemeteries} />} />
          <Route path="*" element={<NotFound />} />
          <Route path='/naga' Component={() => {
            <Navigate to="/" />
            window.location.href = 'https://www.projectnaga.org';
            return null; 
          }} />
        </Routes>
      </div>
       
      </body>
      <Footer />
    </Router>
  )
}

export default App