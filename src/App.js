import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'

// Pages Import
import Home from './Pages/Home';
import Register from './Pages/register/register'

// Component desktop import
import Header from './Components/Desktop/Header'
import Footer from './Components/Desktop/Footer'

// Mobile Components Import

import MobileHeader from './Components/Mobile/header/MobileHeader'
import MobileFooter from './Components/Mobile/footer/mobilefooter';

function App() {

  const isMobileDevice = useMediaQuery({
    query: "(max-device-width: 1024px)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });


  return (
    <>
    {isMobileDevice && <MobileHeader />}
    {isDesktop && <Header />}
    <Routes>
      {/* <Route path='/about' element={<Home/>} /> */}
      <Route path='/register' element={<Register/>} /> 
      <Route path='/' element={<Home/>} /> 
      {/* <Route path='/' element={<Home/>} /> */}
    </Routes> 
    {isMobileDevice && <MobileFooter />}
    {isDesktop && <Footer />}
    </>
  );
}

export default App;
