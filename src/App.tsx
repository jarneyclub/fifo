import React from 'react';

import { Landing } from './views/landings/Landing';
import { Counter } from './components/counter/Counter';
import { JoinQueue } from "./views/JoinQueue/JoinQueue";
import { SignIn } from "./views/SignIn/SignIn";
import { Enroll } from "./views/enroll/Enroll";
import { TAQueue } from "./views/TAQueue/TAQueue"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/sign-up" element={<Counter />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/account" element={<Counter />}></Route>
        <Route path="/user/courses" element={<Landing />}></Route>
        <Route path="/user/enrollment" element={<Enroll />}></Route>
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
          element={<TAQueue />}
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
