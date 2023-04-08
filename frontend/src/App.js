import './App.css';
import Login from './component/Login';

import Home from './component/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  return (
    <Router>
      <div className="App">
        <Routes>


          <Route path='/' element={<Home />} />  <Route path='/login' element={<Login />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
