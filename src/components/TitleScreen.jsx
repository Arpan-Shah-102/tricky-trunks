import './TitleScreen.css';

export function TitleScreen() {
  const loadedBefore = localStorage.getItem('loadedBefore') || false;
  localStorage.setItem('loadedBefore', 'true');

  function clickPlay() {
    document.querySelector('.title-screen').classList.add('fade-out');
    setTimeout(() => {
      document.querySelector('.title-screen').style.display = 'none';
    }, 490);
  }

  return (
    <div className={`title-screen ${!loadedBefore ? 'new-load' : ''}`}>
      <h1><img src="/logo-two-lines.png" alt="Tricky Trunks" /></h1>

      <div className="options">
        <button className="play" onClick={clickPlay}>Play</button>
        <button className="options-btn">Options</button>
      </div>
    </div>
  )
}