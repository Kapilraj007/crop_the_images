import "./App.css";
import {  
  BrowserRouter as Router,  
  Routes,  
  Route
 
}   

from 'react-router-dom';  
import Home from './Home';
import Crop from './Crop';
function App(){
  return (
    <div className='App'>
     <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/crop' element={<Crop/>}/>
      </Routes>
     </Router>
 
    </div>
  );
};

export default App;
