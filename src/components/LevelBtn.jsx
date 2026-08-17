import { useNavigate } from "react-router";
import "./LevelBtn.css";

export function LevelBtn({ setLevelSelectorShown, currentLevel, level }) {
  const navigate = useNavigate();

  function handleClick() {
    setLevelSelectorShown(false);

    setTimeout(() => {
      navigate(`/level/${level}`);
    }, 480);
  }

  return (
    <div
      className={`btn ${currentLevel < level ? 'locked' : ''} ${currentLevel == level ? 'current-level' : currentLevel > level ? 'completed' : ''}`}
      onClick={handleClick}
    >
      {level}
    </div>
  )
}