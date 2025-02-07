import React from 'react';
import Navbar from './Components/Navbar/navbar.jsx';
import Hero from './Components/Hero/hero.jsx';
import Footer from './Components/Footer/footer.jsx';
import About from './Components/About/about.jsx';
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;