import { useEffect } from 'react';
import { Tree } from './Tree';
import './TreeGrid.css';

export function TreeGrid({ trees, setTreesChopped, treesChopped, currentLevel, gameState, setGameState, handleLevelComplete, hintsEnabled }) {

  useEffect(() => {
    let squirrelsChopped = false;
    trees.forEach((isTreeSquirrel, index) => {
      if (isTreeSquirrel && treesChopped[index]) {
        squirrelsChopped = true;
      }
    });

    const totalTreesChopped = treesChopped.filter(chopped => chopped == true).length;
    if (squirrelsChopped) {
      setGameState('lose');
    } else if (totalTreesChopped == 3) {
      setGameState(currentLevel >= 9 ? 'win' : 'next-level');
    }
  }, [trees, treesChopped, currentLevel, setGameState]);

  function handleBackToLevels() {handleLevelComplete()}

  return (
    <>
      <h2>Level {currentLevel}</h2>
      <div
        className="tree-grid"
        style={{ pointerEvents: gameState == 'in-progress' ? 'auto' : 'none' }}
      >
        {Array.from({ length: 12 }, (_, index) => (
          <Tree
            key={index}
            hintsEnabled={hintsEnabled}
            isTreeSquirrel={trees[index]}
            isTreeChopped={treesChopped[index]}
            treesChopped={treesChopped}
            setTreesChopped={setTreesChopped}
            treeNumber={index + 1}
          />
        ))}
      </div>
      <button onClick={handleBackToLevels} className="back-to-levels">Back to Levels</button>
    </>
  )
}