import './App.css'
import About from './components/about';
import Header from './components/header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Prices from './components/prices';
import Main from './components/main';


function App() {

  return (
    <div className="text-white">
      <Header/>
      <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/prices" element={<Prices />} />
        {/* <Route path="*" element={<Navigate to="/" replace />} /> */}  
      </Routes>
    </Router>
    </div>
  )
}

export default App
