import React from 'react';
import { Counter } from './features/counter/Counter';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Counter/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
