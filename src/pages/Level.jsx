import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { TreeGrid } from "../components/TreeGrid";
import { LoseScreen } from "../components/screens/Lose";
import { NextLevelScreen } from "../components/screens/NextLevel";
import { WinScreen } from "../components/screens/Win";
import { genArray } from '../utils/generateRandomLists';
import "./Level.css";

export function Level({ fadeDuration, currentLevel, hintsEnabled, setCurrentLevel }) {
  const [levelShown, setLevelShown] = useState(true);
  const [levelEndScreenShown, setLevelEndScreenShown] = useState(false);
  const [gameState, setGameState] = useState('in-progress'); // 'in-progress', 'next-level', 'win', 'lose'
  const [treesChopped, setTreesChopped] = useState(Array(12).fill(false));
  const [trees, setTrees] = useState(genArray(12, currentLevel));
  const navigate = useNavigate();

  useEffect(() => {
    if (gameState === 'next-level' || gameState === 'win') {
      setCurrentLevel(prev => Math.max(prev, currentLevel + 1));
    } else if (gameState === 'lose') {
      console.log('Lose');
    }
  }, [gameState, setCurrentLevel, currentLevel]);

  function handleLevelComplete(location = 'levels') {
    setLevelShown(false);
    setTimeout(() => {
      navigate(`/${location}`);
    }, fadeDuration - 20);
  }

  function restartLevel() {
    setLevelShown(false);
    setTimeout(() => {
      setGameState('in-progress');
      setTreesChopped(Array(12).fill(false));
      setTrees(genArray(12, currentLevel));
      setLevelShown(true);
    }, fadeDuration - 20);
  }

  return (
    <div className={`level-container fade-${!levelShown ? 'out' : 'in'}`}>
      <TreeGrid
        currentLevel={currentLevel}
        hintsEnabled={hintsEnabled}
        handleLevelComplete={handleLevelComplete}
        gameState={gameState}
        setGameState={setGameState}
        trees={trees}
        treesChopped={treesChopped}
        setTreesChopped={setTreesChopped}
      />
      <LoseScreen
        hidden={gameState !== 'lose'}
        loseScreenShown={levelEndScreenShown}
        setLoseScreenShown={setLevelEndScreenShown} 
        handleLevelComplete={handleLevelComplete}
        currentLevel={currentLevel}
        restartLevel={restartLevel}
      />
      <NextLevelScreen
        hidden={gameState !== 'next-level'}
        nextLevelScreenShown={levelEndScreenShown}
        setNextLevelScreenShown={setLevelEndScreenShown}
        handleLevelComplete={handleLevelComplete}
        currentLevel={currentLevel}
      />
      <WinScreen
        hidden={gameState !== 'win'}
        winScreenShown={levelEndScreenShown}
        setWinScreenShown={setLevelEndScreenShown}
        handleLevelComplete={handleLevelComplete}
      />
    </div>
  )
}