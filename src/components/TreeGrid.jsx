import { Tree } from './Tree';
import './TreeGrid.css';

export function TreeGrid({ hintsEnabled, isTreeSquirrel, isTreeChopped, currentLevel }) {
  const badTreeAmount = currentLevel;
  const goodTreeAmount = 9 - badTreeAmount;
  const trees = Array.from({ length: 9}, (_, index) => {
    
  });

  return (
    <div className="tree-grid">
      {Array.from({ length: 9 }, (_, index) => (
        <Tree
          key={index}
          hintsEnabled={hintsEnabled}
          isTreeSquirrel={isTreeSquirrel}
          isTreeChopped={isTreeChopped}
          treeNumber={index + 1}
        />
      ))}
    </div>
  )
}