
import './App.css';
import { Courses, Header, Hero } from './containers';
import { useState } from 'react';
import ToggleColorMode from './components/Theme/Theme';
import ResponsiveAppBar from './components/Navbar/Navbar';

function App() {

 
  return (
    <div>
            <ResponsiveAppBar />
            <Hero />
            <Courses />
        {/* <Header/> */}
      
    </div>
  );
}

export default App;
