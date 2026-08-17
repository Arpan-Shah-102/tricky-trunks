import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { LevelSelector } from './pages/LevelSelector';
import { TitleScreen } from './pages/TitleScreen';
import { Level } from './pages/Level';
import { ErrorPage } from './pages/ErrorPage';
import './App.css';

function App() {
  const [currentLevel, setCurrentLevel] = useState(parseInt(localStorage.getItem('currentLevel')) || 1);
  const [quickNavigate, setQuickNavigate] = useState(localStorage.getItem('quickNavigate') === 'true' || false);
  const [hintsEnabled, setHintsEnabled] = useState(localStorage.getItem('hintsEnabled') === 'true' || false);
  const fadeDuration = quickNavigate ? 250 : 500;
  const totalLevels = 9;

  useEffect(() => {
    document.body.style = `--fade-duration: ${fadeDuration}ms`;
  }, [fadeDuration]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <TitleScreen
            quickNavigate={quickNavigate}
            setQuickNavigate={setQuickNavigate}
            fadeDuration={fadeDuration}
            hintsEnabled={hintsEnabled}
            setHintsEnabled={setHintsEnabled}
          />
        }
      />
      <Route
        path="/levels"
        element={
          <LevelSelector
            currentLevel={currentLevel}
            fadeDuration={fadeDuration}
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
              hintsEnabled={hintsEnabled}
            />
          }
        />
      ))}
      <Route
        path="*"
        element={
          <ErrorPage
            fadeDuration={fadeDuration}
          />
        }
      />
    </Routes>
  )
}

export default App;
