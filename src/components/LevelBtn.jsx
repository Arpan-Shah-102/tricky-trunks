import { NavLink } from "react-router";
import "./LevelBtn.css";

export function LevelBtn({ currentLevel, level }) {
  return (
    <NavLink className={currentLevel < level ? 'locked' : ''} to={`/level/${level}`}>
      <div
        className={`btn ${currentLevel == level ? 'current-level' : currentLevel > level ? 'completed' : ''}`}
      >
        {level}
      </div>
    </NavLink>
  )
}