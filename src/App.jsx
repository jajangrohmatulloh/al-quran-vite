import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './materialize.min.css';
import Ayat from './pages/Ayat';
import Surah from './pages/Surah';
import './App.css';

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" exact element={<Surah />} />
        <Route path="/surah/:number" element={<Ayat />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
