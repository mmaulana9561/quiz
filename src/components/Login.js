import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username) {
      onLogin(username);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Enter your name" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          required 
        />
        <button type="submit">Start Quiz</button>
      </form>
    </div>
  );
};

export default Login;
