import React from 'react';

import { Landing } from './views/landings/Landing';
import { Counter } from './components/counter/Counter';
import { JoinQueue } from './views/JoinQueue/JoinQueue';
import LoginPage from './views/SignIn/SignIn';
import { Enroll } from './views/enroll/Enroll';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { auth } from './config/firebase';
import firebaseConfig from './config/config';
import { initializeApp } from 'firebase/app';
import AuthRoute from './components/AuthRoute';
import './App.css';
import { ClockIn } from './components/ClockIn/ClockIn';

initializeApp(firebaseConfig);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        {/* <Route path="/" element={<AuthRoute><Landing /></AuthRoute>} /> */}
        <Route path="/sign-up" element={<Counter />}></Route>
        <Route path="/sign-in" element={<LoginPage />}></Route>
        <Route path="/account" element={<Counter />}></Route>
        {/* implementation to protect unauthorized access */}
        <Route path="/user/courses" element={<LoginPage />}></Route>
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
          path="/user/instructor/comp40/ClockIn"
          element={<ClockIn />}
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
