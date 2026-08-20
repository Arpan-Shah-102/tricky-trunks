import { useNavigate } from 'react-router';
import { useState } from 'react';
import './TitleScreen.css';

export function TitleScreen({ hintsEnabled, setHintsEnabled, quickNavigate, setQuickNavigate, fadeDuration }) {
  const [titleScreenShown, setTitleScreenShown] = useState(true);
  const [optionsShown, setOptionsShown] = useState(false);

  const [muted, setMuted] = useState(localStorage.getItem('muted') === 'true');
  const navigate = useNavigate();
  
  const loadedBefore = localStorage.getItem('loadedBefore') || false;
  localStorage.setItem('loadedBefore', 'true');

  document.body.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    if (key == 'p') {
      clickPlay();
    } else if (key == 'o') {
      toggleOptions();
    } else if (key == 'm') {
      muteAudio();
    } else if (key == 'h') {
      updateHintsEnabled();
    } else if (key == 'q' || key == 'n') {
      setQuickNavigate(!quickNavigate);
    } else if (key == 't') {
      goToTutorial();
    }
  });

  function clickPlay() {
    setTitleScreenShown(false);
    setTimeout(() => {
      navigate('/levels');
    }, fadeDuration - 20);
  }
  function toggleOptions() {
    setOptionsShown(!optionsShown);
  }
  function muteAudio() {
    localStorage.setItem('muted', !muted);
    setMuted(!muted);
  }
  function resetGame() {
    if (confirm('Are you sure you want to reset your progress?')) {
      localStorage.clear();
      setOptionsShown(false);
      location.reload();
    }
  }
  function changeNavigation() {
    localStorage.setItem('quickNavigate', !quickNavigate);
    setQuickNavigate(!quickNavigate);
  }
  function updateHintsEnabled() {
    localStorage.setItem('hintsEnabled', !hintsEnabled);
    setHintsEnabled(!hintsEnabled);
  }
  function goToTutorial() {
    setOptionsShown(false);
    setTitleScreenShown(false);
    setTimeout(() => {
      navigate('/tutorial');
    }, fadeDuration - 20);
  }

  return (
    <div className="screen-container">
      <div
        className={`title-screen ${!loadedBefore ? 'new-load' : ''} fade-${titleScreenShown ? 'in' : 'out'}`}
        style={{ transform: optionsShown ? 'translateX(-100%)' : 'translateX(0)' }}
      >
        <h1><img src="/logo-two-lines.png" alt="Tricky Trunks" /></h1>

        <div className="options">
          <button className="play" onClick={clickPlay}>Play</button>
          <button className="options-btn" onClick={toggleOptions}>Options</button>
        </div>
      </div>
      <div
        className={`options-screen`}
        style={{ left: optionsShown ? '0' : '100%' }}
      >
        <button className="back-btn" onClick={toggleOptions}>Back</button>
        <h2>Options</h2>
        <label className="toggle muted-toggle">
          Muted:
          <input type="checkbox" checked={muted} onChange={muteAudio} />
        </label>
        <label className="toggle quick-navigate-toggle">
          Quick Navigate:
          <input type="checkbox" checked={quickNavigate} onChange={changeNavigation} />
        </label>
        <label className="toggle help-mode-toggle">
          Hints:
          <input type="checkbox" checked={hintsEnabled} onChange={updateHintsEnabled} />
        </label>
        <button className="tutorial-btn" onClick={goToTutorial}>Tutorial</button>
        <button className="reset-btn" onClick={resetGame}>Reset Data</button>
      </div>
    </div>
  )
}