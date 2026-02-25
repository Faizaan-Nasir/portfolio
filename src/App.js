import './App.css';
import { Routes, Route } from 'react-router-dom';
import { createClient } from 'contentful';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import About from './components/About';
import Blog from './components/Blog';
import Projects from './components/Projects';
import Certificates from './components/Certificates';

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE,
  accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
});

function App() {
  return (
    <div className="App">
      <Profile client={client} />
      <div className='main-content'>
        <Navbar />
        <Routes>
          <Route path='/' element={<About client={client} />} />
          <Route path='/blog' element={<Blog client={client} />} />
          <Route path='/projects' element={<Projects client={client} />} />
          <Route path='/certificates' element={<Certificates client={client} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
