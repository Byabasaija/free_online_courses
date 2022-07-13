
import './App.css';
import { Header } from './containers';
import { useState } from 'react';
import ToggleColorMode from './components/Theme/Theme';
import ResponsiveAppBar from './components/Navbar/Navbar';

function App() {

 
  return (
    <div>
            <ResponsiveAppBar />
      
        {/* <Header/> */}
      
    </div>
  );
}

export default App;
