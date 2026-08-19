import "./GameScreen.css";

export function NextLevelScreen({ currentLevel, hidden, nextLevelScreenShown, handleLevelComplete }) {
  function startNextLevel() {handleLevelComplete('/level/' + (currentLevel + 1))}
  function backToLevels() {handleLevelComplete()}

  return (
    <div className={`end-screen next-level-screen ${hidden ? 'hidden' : ''} fade-${!nextLevelScreenShown ? 'in' : 'out'}`}>
      <h1>Level Passed!</h1>
      <p>Congratulations! You have made it to the next level!</p>
      <button className="next-level-btn" onClick={startNextLevel}>Next Level</button>
      <button className="back-to-levels-btn" onClick={backToLevels}>Back to Levels</button>
    </div>
  )
}