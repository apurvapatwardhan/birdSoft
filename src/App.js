
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Project from './components/Routes/Project';
import Services from './components/Routes/Services';
import Blogs from './components/Routes/Blogs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path = "/projects" element={<Project />}/>
        <Route path="/services" element={<Services />}/>
        <Route path="/blogs" element={<Blogs />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
