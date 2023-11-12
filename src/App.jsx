import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Squad from './pages/Squad';
import Photos from './pages/Photos';
import About from './pages/About';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/squad" element={<Squad />} />
      <Route path="/photos" element={<Photos />} />
      <Route path="/about" element={<About />}/>
    </Routes>
  );
}

export default App;
