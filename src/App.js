import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './containers/home';
import Cover from './containers/cover';
import About from './containers/about';
import Skills from './containers/skills';
import Resume from './containers/resume';
import Awards from './containers/awards';
import Navbar from './components/navBar';
import { loadFull } from 'tsparticles'
import Particles from 'react-tsparticles';
import particles from './utils.js/particles';

function App() {

  const location = useLocation();
  console.log(location);

  const handleInit = async (main) => {
    await loadFull(main)
  }

  const renderparticleJsInHomePage = location.pathname === "/";

  return (
    <div className="App">
      {/* particles js */}

      {
        renderparticleJsInHomePage &&
        <Particles id='particles' options={particles} init={handleInit} />

      }

      {/* navbar */}
      <Navbar />

      {/* main page content */}

      <div className='App__main-page-content'>
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/awards' element={<Awards />} />
          <Route path='/cover' element={<Cover />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
