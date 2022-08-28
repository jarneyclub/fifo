import React from 'react';

import { Landing } from './views/landings/Landing';
import { Counter } from './components/counter/Counter';
import { JoinQueue } from "./views/JoinQueue/JoinQueue";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.module.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/sign-up" element={<Counter />}></Route>
        <Route path="/sign-in" element={<Counter />}></Route>
        <Route path="/account" element={<Counter />}></Route>
        <Route path="/user/courses" element={<Counter />}></Route>
        <Route path="/user/enrollment" element={<Counter />}></Route>
        <Route
          path="/user/student/comp40/check-queue"
          element={<Counter />}
        ></Route>
        <Route
          path="/user/student/comp40/join-queue"
          element={<JoinQueue />}
        ></Route>
        <Route
          path="/user/instructor/comp40/clock-in"
          element={<Counter />}
        ></Route>
        <Route
          path="/user/instructor/comp40/check-queue"
          element={<Counter />}
        ></Route>
        <Route
          path="/user/instructor/comp40/view-detail"
          element={<Counter />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
