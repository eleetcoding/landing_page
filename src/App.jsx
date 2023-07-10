import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HeaderContainer from './containers/HeaderContainer.jsx';
import FooterContainer from './containers/FooterContainer.jsx';
import MainPage from './pages/MainPage.jsx';
import SchedulePage from './pages/SchedulePage.jsx';
import AboutPage from './pages/AboutPage.jsx';

function App() {
  return (
    <div>
      <HeaderContainer />
      <Routes>
        <Route exact path='/' element={<MainPage />} />
        <Route exact path='/schedule' element={<SchedulePage />} />
        <Route exact path='/about' element={<AboutPage />} />
      </Routes>
      <FooterContainer />
    </div>
  );
}

export default App;
