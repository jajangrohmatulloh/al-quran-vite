import React from 'react';
import './App.css';
import '../../../materialize.min.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Surah from '../Surah/Surah';
import Ayat from '../Ayat/Ayat';

function App(props) {
  return (
    <BrowserRouter basename="/projects/al-quran">
      {/* <TransitionGroup> */}
      {/* <CSSTransition classNames="fade" timeout={1000}> */}
      {/* <Switch> */}
      <Routes>
        <Route path="/" exact element={<Surah />} />
        <Route path="/surah/:number" element={<Ayat />} />
        <Route path='*' element={<Navigate to="/" replace/>}/>
      </Routes>
      {/* </Switch> */}
      {/* </CSSTransition> */}
      {/* </TransitionGroup> */}
    </BrowserRouter>
  );
}

export default App;
