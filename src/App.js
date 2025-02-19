import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link

// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type

    })
    setTimeout(()=>{
        setAlert(null);
    }, 1000);

  }
  const toggleMode = () => {
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success")
      document.title ='SRI RAM LOGISTICS - Dark Mode' ;
      // setInterval(()=>{
      //   document.title = 'SRI RAM LOGISTICS is Amazing Mode';

      // },2000);
      // setInterval(() =>{
      //   document.title ='INSTALL SRI RAM LOGISTICS'
      // },1600);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
      document.title ='SRI RAM LOGISTICS - Light  Mode';

    }
  };
  return (
    <>
     {/* <Navbar title ="Sambhaw" aboutTxt="About Sambhaw"/>  */}
     {/* <Navbar/> */}
     {/* <Router> */}
     <Navbar title="Sambhaw" mode={mode} toggleMode={toggleMode} />
     <Alert alert={alert}/>
     <div className="container" my-2>
     {/* <Routes> */}
     {/* /users --> component 1 */}
     {/* /users/home --. componenet 2 */}
  {/* <Route exact path="/about" element={<About />} /> */}
  {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} /> */}
  <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
{/* </Routes> */}

     {/* <button type="button" class="btn btn-outline-primary">Primary</button> */}
     {/* <About/> */}
    
     </div>
     {/* </Router> */}
  
    </>
     );
}
export default App;