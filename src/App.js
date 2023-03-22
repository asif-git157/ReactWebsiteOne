import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  
  const toggleMode = ()=>{
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
    <Navbar title="TextUtils1" aboutText="About" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>} />
          <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;