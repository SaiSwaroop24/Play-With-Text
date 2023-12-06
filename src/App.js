import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';
import Alert from './components/Alert';
//import About from './components/About';
//import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mymode, setmymode] = useState('light');
  const [themetext1, setthemetext1] = useState('To Dark Mode');
  const [themetext2, setthemetext2] = useState('To Red Mode');
  const [themetext3, setthemetext3] = useState('To Green Mode');
  const [alert, setAlert] = useState(null);
  const [colors, setColor] = useState('white');
  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const change = () => {
    if (mymode === 'light') {
      setmymode('dark');
      setColor('black');
      setthemetext1('To Light Mode');
      document.body.style.backgroundColor = 'black';
      showalert('Entered Dark Mode', 'success');
    } else {
      setmymode('light');
      setthemetext1('To Dark Mode');
      setColor('white');
      document.body.style.backgroundColor = 'white';
      showalert('Entered Light Mode', 'success');
    }
  };

  const change1 = () => {
    if (colors !== 'red') {
      setmymode('dark');
      setthemetext2('To Dark Mode');
      document.body.style.backgroundColor = '#6e2f3c';
      setColor('red');
      showalert('Entered Red Mode', 'success');
    } else {
      setmymode('dark');
      setthemetext2('To Red Mode');
      setColor('black');
      document.body.style.backgroundColor = 'black';
      showalert('Entered Dark Mode', 'success');
    }
  };

  const change2 = () => {
    if (colors !== 'green') {
      setmymode('dark');
      setthemetext3('To Dark Mode');
      document.body.style.backgroundColor = '#374f3b';
      setColor('green');
      showalert('Entered Green Mode', 'success');
    } else {
      setmymode('dark');
      setthemetext3('To Green Mode');
      setColor('black');
      document.body.style.backgroundColor = 'black';
      showalert('Entered Dark Mode', 'success');
    }
  };

  return (
    <>
      <Navbar mymode={mymode} themetext1={themetext1} themetext2={themetext2} themetext3={themetext3} change={change} change1={change1} change2={change2} />
      <Alert alert={alert} />
      <Textbox mymode={mymode} showalert={showalert} colors={colors} />
    </>
   /* <Router>
      <Navbar mymode={mymode} themetext1={themetext1} themetext2={themetext2} themetext3={themetext3} change={change} change1={change1} change2={change2} />
      <Alert alert={alert} />
        <Routes>
          <Route path="/about" element={<About mode={mymode} />} />
          <Route path="/" element={<Textbox mymode={mymode} showalert={showalert} colors={colors} />} />
        </Routes>
  </Router>*/
      
  );
}

export default App;
