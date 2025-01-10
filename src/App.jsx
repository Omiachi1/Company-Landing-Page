import React from 'react';
import Navbar from './components/Navbar/Navbar';
import MobileNav from './components/Navbar/MobileNav';
import Home from './components/Home/Home';
import Feature from './components/Feature/Feature';
import Workflow from './components/Workflow/Workflow';
import Pricing from './components/Pricing/pricing';
import Testimonial from './components/Testimonial/Testimonial';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <MobileNav/>
      <Home/>
      <Feature/>
      <Workflow/>
      <Pricing/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default App
