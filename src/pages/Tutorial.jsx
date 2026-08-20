import { useState } from "react";
import { useNavigate } from "react-router";
import './Tutorial.css';

export function Tutorial({ fadeDuration }) {
  const [tutorialShown, setTutorialShown] = useState(true);
  const navigate = useNavigate();

  function closeTutorial() {
    setTutorialShown(false);
    setTimeout(() => {
      navigate('/');
    }, fadeDuration - 20);
  }

  document.body.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' || event.key === 'Backspace' || event.key.toLowerCase() == 'b') {
      closeTutorial();
    }
  });

  return (
    <div className={`tutorial fade-${!tutorialShown ? 'out' : 'in'}`}>
      <h2>Welcome to Tricky Trunks!</h2>
      <div className="section">
        <h3>How to Play</h3>
        <p>In this game, your goal is to chop down 3 of the trees in each level. But be careful! Some trees are tricky and may have squirrels hiding in them.</p>
        <p>Click on the trees to chop them down. If you chop down a tree with a squirrel, you'll lose the level. If you chop down all the 3 required trees without hitting a squirrel, you'll advance to the next level!</p>
        <p>Complete all 9 levels and you win the game!</p>
      </div>
      <div className="section">
        <h3>Keybinds</h3>
        <p>Press 'Escape', 'Backspace', or 'B' to go back to the previous screen.</p>
        <h4>Title Screen</h4>
        <p>Press 'H' to toggle hints.</p>
        <p>Press 'M' to mute/unmute audio.</p>
        <p>Press 'P' to play the game.</p>
        <p>Press 'O' to open the options menu.</p>
        <p>Press 'Q' or 'N' to toggle quick navigation.</p>
        <h4>Level Selector</h4>
        <p>Press the number keys (1-9) to select a level directly.</p>
        <h4>Level</h4>
        <p>Press 'R' to restart the level.</p>
      </div>
      <div className="section">
        <h3>Tips</h3>
        <p>If you restart a level, the squirrels stay in the same tree.</p>
        <p>Make sure you don't hit the same squirrel again!</p>
        <p>Good luck and have fun!</p>
      </div>
      <button className="back-to-home" onClick={closeTutorial}>Back to Home</button>
    </div>
  )
}