import React from 'react'
import Footer from '../components/Footer';
import Header from "../components/Header";
import ProjectDisplay from "../components/ProjectDisplay";
import Projects from "../components/Projects";
import Slider from "../components/Slider";
import Utilities from "../components/Utilities";
import About from '../components/About';

function Home() {
  return (
    <div>
      <Header/>
     <Slider/>
     <About/>
     <Utilities/>
     <Projects/>
     <ProjectDisplay/>
     <Footer/>6
    </div>
  )
}

export default Home
