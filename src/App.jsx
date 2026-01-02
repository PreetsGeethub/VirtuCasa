import { useState } from 'react'
import Home from './pages/Home'
import Hero from './components/Hero'
import { Outlet } from 'react-router-dom'
import QuickPanel from "../src/components/QuickPanel.jsx";
import ServicesMarquee from './components/ServicesMarquee.jsx'
import OurSolutions from './components/OurSolutions.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import MetaverseSection from './components/MetaverseSection.jsx'
import MetaverseCards from './components/MetaverseCards.jsx'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <QuickPanel/> */}
     
      <Header/>
       <Hero/> 
      <ServicesMarquee/>
      <OurSolutions/>
      <WhyChooseUs/>
      
      <MetaverseCards/>
      <MetaverseSection/>
      <Footer/>
      <Outlet/>
    </>
  )
}

export default App
