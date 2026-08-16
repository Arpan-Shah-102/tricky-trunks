import { useState, useEffect } from 'react';
import { playClickSfx } from '../utils/sfxManager';
import './TitleScreen.css';

export function TitleScreen({ titleScreenShown, setTitleScreenShown }) {
  const [optionsShown, setOptionsShown] = useState(false);
  const [muted, setMuted] = useState(localStorage.getItem('muted') === 'true');

  useEffect(() => {
    const titleScreenElement = document.querySelector('.title-screen');
    if (titleScreenShown) {
      titleScreenElement.style.display = 'flex';
      setTimeout(() => {
        titleScreenElement.classList.remove('fade-in');
      }, 490);
    }
  }, [titleScreenShown]);

  const loadedBefore = localStorage.getItem('loadedBefore') || false;
  localStorage.setItem('loadedBefore', 'true');

  function clickPlay() {
    setTitleScreenShown(false);
    document.querySelector('.title-screen').classList.add('fade-out');
    setTimeout(() => {
      document.querySelector('.title-screen').style.display = 'none';
    }, 490);
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
        <label className="muted-toggle">
          Muted:
          <input type="checkbox" checked={muted} onChange={muteAudio} />
        </label>
        <button className="reset-btn" onClick={resetGame}>Reset Data</button>
      </div>
    </div>
  )
}