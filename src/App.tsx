import React from 'react';
import WindowSizeDisplay from './components/WindowSizeDisplay/WindowSizeDisplay';
import './App.css';

const App: React.FC = () => {
  return (
    <div className='app-container'>
      <h1>Responsive Window Tracker</h1>
      <WindowSizeDisplay />
    </div>
  );
};

export default App;
