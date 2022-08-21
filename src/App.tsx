import React from 'react';
import { Counter } from './features/counter/Counter';
import { Landing } from './features/landings/Landing';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Counter/>}/>
        <Route path="/home" element={<Landing/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
