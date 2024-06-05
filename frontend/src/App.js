
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SignIn from './pages/Login/Login'; // Import the login page component
import SignUp from './pages/Register/Register';
import Chat from './pages/Chat/Chat';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SignIn />} /> {/* Route for the login page */}
          <Route path="/register" element={<SignUp />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
