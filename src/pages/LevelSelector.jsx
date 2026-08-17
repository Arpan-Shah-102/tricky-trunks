import { useState } from 'react';
import { useNavigate } from 'react-router';
import { LevelBtn } from '../components/LevelBtn';
import './LevelSelector.css';

export function LevelSelector({ currentLevel, fadeDuration }) {
  const [levelSelectorShown, setLevelSelectorShown] = useState(true);
  const navigate = useNavigate();
  const totalLevels = 9;

  function closeLevelSelector() {
    setLevelSelectorShown(false);
    setTimeout(() => {
      navigate('/');
    }, fadeDuration - 20);
  }

  return (
    <div className={`level-selector fade-${!levelSelectorShown ? 'out' : 'in'}`}>
      <h2>Level Selector</h2>
      <div className="level-grid">
        {Array.from({ length: totalLevels }, (_, index) => (
          <LevelBtn
            currentLevel={currentLevel}
            setLevelSelectorShown={setLevelSelectorShown}
            key={index + 1}
            level={index + 1}
          />
        ))}
      </div>
      <button className='close-btn' onClick={closeLevelSelector}>Back</button>
    </div>
  )
}
