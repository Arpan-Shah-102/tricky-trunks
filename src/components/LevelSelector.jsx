import { useEffect } from 'react';
import './LevelSelector.css';

export function LevelSelector({ titleScreenShown, setTitleScreenShown }) {

  useEffect(() => {
    const levelSelectorElement = document.querySelector('.level-selector');
    levelSelectorElement.classList = `level-selector fade-${!titleScreenShown ? 'out' : 'in'}`;
    if (!titleScreenShown) levelSelectorElement.style.display = 'flex';
  }, [titleScreenShown]);

  function closeLevelSelector() {
    setTitleScreenShown(true);
  }

  return (
    <div className="level-selector">
      <h2>Level Selector</h2>
      <button onClick={closeLevelSelector}>Close</button>
    </div>
  )
}
