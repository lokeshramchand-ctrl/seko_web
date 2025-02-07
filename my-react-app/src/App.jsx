import React from 'react';
import Navbar from './Components/Navbar/navbar.jsx';
import Hero from './Components/Hero/hero.jsx';
import Footer from './Components/Footer/footer.jsx';
import About from './Components/About/about.jsx';
import Why from './Components/Why/why.jsx';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Why/>
      <Footer/>
    </div>
  );
}

export default App;