import { useState } from 'react';
import { Route, Routes } from 'react-router';
import { HomeScreen } from './pages/HomeScreen';
import { Level } from './pages/Level';
import './App.css';

function App() {
  const [currentLevel, setCurrentLevel] = useState(parseInt(localStorage.getItem('currentLevel')) || 1);
  const totalLevels = 9;

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <HomeScreen
              currentLevel={currentLevel}
            />
          }
        />
        {Array.from({ length: totalLevels }, (_, index) => (
          <Route
            key={index + 1} 
            path={`/level/${index + 1}`}
            element={
              <Level
                currentLevel={index + 1}
                setCurrentLevel={setCurrentLevel}
              />
            }
          />
        ))}
      </Routes>
    </>
  )
}

export default App;
