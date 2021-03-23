import React, {useRef} from 'react'

import Header from './Header/Header';
import Main from './Main/Main';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import Footer from './Footer/Footer';

import './App.css';

function App() {

  // const sectionRef = useRef()

  // function handleBackClick() {
  //   sectionRef.current.scrollIntoView({ behavior: 'smooth' })
  // }

  return (
    <div className='App'>
      <Header />
      <Main />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
