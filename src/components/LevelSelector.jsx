import { useEffect } from 'react';
import { LevelBtn } from './LevelBtn';
import './LevelSelector.css';

export function LevelSelector({ currentLevel, titleScreenShown, setTitleScreenShown }) {
  const totalLevels = 9;

  useEffect(() => {
    const levelSelectorElement = document.querySelector('.level-selector');
    if (!titleScreenShown) {
      levelSelectorElement.style.display = 'flex';
      setTimeout(() => {
        levelSelectorElement.classList.remove('fade-in');
      }, 490);
    }
  }, [titleScreenShown]);

  function closeLevelSelector() {
    setTitleScreenShown(true);
    const levelSelectorElement = document.querySelector('.level-selector');
    levelSelectorElement.classList.add('fade-out');
    setTimeout(() => {
      levelSelectorElement.style.display = 'none';
    }, 490);
  }

  return (
    <div className={`level-selector fade-${titleScreenShown ? 'out' : 'in'}`}>
      <h2>Level Selector</h2>
      <div className="level-grid">
        {Array.from({ length: totalLevels }, (_, index) => (
          <LevelBtn
            currentLevel={currentLevel}
            key={index + 1}
            level={index + 1}
          />
        ))}
      </div>
      <button className='close-btn' onClick={closeLevelSelector}>Close</button>
    </div>
  )
}
