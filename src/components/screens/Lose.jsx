import "./GameScreen.css";

export function LoseScreen({ restartLevel, hidden, loseScreenShown, handleLevelComplete }) {
  function backToLevels() {handleLevelComplete()}

  return (
    <div className={`end-screen lose-screen ${hidden ? 'hidden' : ''} fade-${!loseScreenShown ? 'in' : 'out'}`}>
      <h1>Game Over</h1>
      <p>You hit a squirrel and failed this level!</p>
      <button className="restart-btn" onClick={restartLevel}>Restart Level</button>
      <button className="back-to-levels-btn" onClick={backToLevels}>Back to Levels</button>
    </div>
  )
}