import { NavLink } from "react-router";
import "./Level.css";

export function Level({ currentLevel, setCurrentLevel }) {
  function completeLevel() {
    setCurrentLevel(currentLevel + 1);
    localStorage.setItem('currentLevel', currentLevel + 1);
  }
  return (
    <div className="level-container">
      <h2>Level {currentLevel}</h2>
      <a onClick={completeLevel}>Complete Level</a>
      <NavLink to="/levels">Back to Levels</NavLink>
    </div>
  )
}