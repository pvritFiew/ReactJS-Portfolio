import React from 'react';
import './App.css';
import imgP from './Image/me2.jpg'
import SkillBox from './component/skill'
import AbouteBox from './component/about'
import Contact from './component/contact'
import Footer from './component/footer';
// import Exp from './component/experience'

function App() {
  
  const openweb = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const scrollToTop = () => window.scrollTo({top: 0, behavior: "smooth"})

  const scrollToAnywhere = position => window.scrollTo({top: position, behavior: "smooth"})

  return (
    <div className="App">
      <div className='navbar'>
        <ul>
          <li onClick={scrollToTop}><p>Home</p></li>
          <li onClick={() => scrollToAnywhere(750)}><p>Aboute Me</p></li>
          <li onClick={() => scrollToAnywhere(1900)}><p> Contact</p></li>
        </ul>
      </div>

      <div className='basic_info'>
        <img className='main_img' src={imgP} alt=""/>
        <p className='main_info'>Hello, This is my PortFolio,<br/>My name is Phoovarit Srimahadthai,
            <br/> I'm Study in bachelor of Engineering, <br/>Software Engineering at Thammasat University.</p>
      </div>
      
      
      <div className='download'>
        <h3>Can Get My Resume and education certificate</h3>
        <h3 className='dlh'>Here!</h3>
        <button title='Download Resume' onClick={() => openweb('https://drive.google.com/file/d/1Vq5GcypL2T49oO_UMASLr14oUhk6gsK0/view?usp=sharing')}>Resume</button> 
        <button title='Download education certificate' onClick={() => openweb('https://drive.google.com/file/d/18fQJFEkA_VZdPvXtSj-bjJ_TDlmTRTwc/view?usp=sharing')}>Certificate</button>
      </div>

      <div>
        <AbouteBox/>
        <SkillBox/>
        {/* <Exp/> */}
        <Contact/>
        <Footer/>
      </div>
    </div>
    
  );
}

export default App;
