
import React , { useState } from 'react';
import './App.css';
import About from './components/About';

import Navbar from './components/Navbar';
import Textform2 from './components/Textform2';
import Alert from './components/Alert';
//import b1 from './images/b1.jpg';



import {
BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";



function App() {
  const [mode ,setmode] = useState('light');
  const [alert ,setAlert] = useState('');

  const showAlert =(message,type)=>{
    setAlert({
      msg : message,
      type :type
    })
    setTimeout(()=>{
        setAlert('null');
    },1500);

  }
  //const removeBodyClasses=()=>{
       //document.body.classList.remove('bg-light')
     //  document.body.classList.remove('bg-dark')
      // document.body.classList.remove('bg-success')
     //  document.body.classList.remove('bg-warning')
      // document.body.classList.remove('bg-danger')

  //}
  const toggleMode=(cls)=>{
    //removeBodyClasses();
    //console.log(cls)
    //document.body.classList.add('bg-'+cls)
    if(mode==='light')
    {
      setmode('dark')
      document.body.style.backgroundColor ='#042743';
      showAlert('dark mode has been enabled','success');
    }
    else{
      
     setmode('light')
     document.body.style.backgroundColor ='white';
      showAlert('light mode has been enabled','success');
    }
  }
  return (
    <>
    {/*<div style={{backgroundImage:`url(${b1})`,
    height: '45vh',
    backgroundSize:'cover',
  }}
  >*/}
    <Router>
    {/*<Navbar title="Textutils" aboutText="about Textutils"/>*/}
    
    <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}></Navbar>
    <Alert alert={alert} />
    <div className="container my-3">
    <Switch>
          <Route path="/about">
            <About mode={mode}/>
          </Route>
          
          <Route path="/">
          <Textform2 showAlert={showAlert} heading ='Try TextUtils - word counter , Character counter' mode={mode}/>
         </Route>
       </Switch>
     
    
       </div>
        </Router>
       
       </>
  );

  
  
}

export default App;
