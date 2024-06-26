
import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SignIn from './pages/Login/Login'; // Import the login page component
import SignUp from './pages/Register/Register';
import Chat from './pages/Chat/Chat';
import { AuthContext } from './context/AuthContext';
import { ChatProvider } from './context/ChatContext';

function App() {
  const { user } = useContext(AuthContext)
  return (
    <ChatProvider user={user}>
      <Router>
        <div className="App">
          <Routes>
            {/* <Route path="/" element={user ? <Chat /> : <SignIn />} /> */}
            <Route path="/" element={<SignIn />} />
            <Route path="/register" element={user ? <Chat /> : <SignUp />} />
            <Route path="/chat" element={user ? <Chat /> : <SignIn />} />
          </Routes>
        </div>
      </Router>
    </ChatProvider>
  );
}


export default App;
