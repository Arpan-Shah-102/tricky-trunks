import { sfx, playSound, playRandomChop } from '../utils/sfxManager';
import './Tree.css';

export function Tree({ hintsEnabled, isTreeSquirrel, isTreeChopped, treesChopped, setTreesChopped, treeNumber }) {
  function chopTree() {
    const newTreesChopped = [...treesChopped];
    newTreesChopped[treeNumber - 1] = true;
    setTreesChopped(newTreesChopped);
    if (isTreeSquirrel) {
      playSound(sfx.chopSquirrel);
    } else {
      playRandomChop();
    }
  }

  return (
    <div
      className={
        `tree-ground 
        ${isTreeSquirrel ? 'tree-squirrel' : ''} 
        ${isTreeChopped ? 'tree-chopped' : ''} 
        ${hintsEnabled ? 'hinty-tree' : ''}
        `
      }
    >
      <div className="tree-content">
        <div onClick={chopTree} className="hitbox"></div>
      </div>
    </div>
  )
}