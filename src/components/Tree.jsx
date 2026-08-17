import './Tree.css';

export function Tree({ hintsEnabled, isTreeSquirrel, isTreeChopped }) {
  return (
    <div className={`tree ${isTreeSquirrel ? 'tree-squirrel' : ''} ${isTreeChopped ? 'tree-chopped' : ''} ${hintsEnabled ? 'hinty-tree' : ''}`}>
      tree
    </div>
  )
}