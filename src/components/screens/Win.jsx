import "./GameScreen.css";

export function WinScreen({ hidden, winScreenShown, handleLevelComplete }) {
  function backToLevels() {handleLevelComplete()}

  return (
    <div className={`end-screen win-screen ${hidden ? 'hidden' : ''} fade-${!winScreenShown ? 'in' : 'out'}`}>
      <h1>You Win!</h1>
      <p>Congratulations! You have completed all the levels! Give yourself an applause!</p>
      <button className="back-to-levels-btn" onClick={backToLevels}>Back to Levels</button>
    </div>
  )
}