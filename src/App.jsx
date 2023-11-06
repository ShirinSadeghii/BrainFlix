import '../src/App.scss';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import UploadPage from './pages/UploadPage/UploadPage';

// const baseUrl = process.env.REACT_APP_BASE_URL;


function App() {


  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/:id' element={<HomePage />} />
        <Route path='/upload' element={<UploadPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

