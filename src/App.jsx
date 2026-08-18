import { useState } from 'react';
import Sidebar from './components/Sidebar.js';
import { createNode } from './core/schema';
import { componentTypes } from './core/component-types';
import { useCanvasStore } from "./store/canvasStore.js";
import { renderTree} from './core/renderer.js';
import Inspector from './components/inspector/Inspector.js';
import ThemeToggle from './components/ThemeToggle.js';

function App() {
  const [dragItem, setDragItem] = useState(null);
  const [dragPos, setDragPos] = useState({ x: 0, y: 0 });

  function handleDragStart(e, item) {
    setDragItem(item);
    setDragPos({ x: e.clientX, y: e.clientY });

    window.addEventListener('pointermove', handleDragMove);
    window.addEventListener('pointerup', handleDragEnd);
  }

  function handleDragMove(e) {
    setDragPos({ x: e.clientX, y: e.clientY });
  }

  function handleDragEnd() {
    setDragItem(null);
    window.removeEventListener('pointermove', handleDragMove);
    window.removeEventListener('pointerup', handleDragEnd);
  }

  function handleCanvasDrop(e) {
    if (!dragItem) return;

    const type = dragItem.id;
    const defaults = componentTypes[type]?.defaultProps || {};
    const defaultStyles = componentTypes[type]?.defaultStyles || {};
    const node = createNode(type, defaults);
    node.styles = defaultStyles;

    const present = useCanvasStore.getState().present;
    const tree = present.tree;

    const target = document.elementFromPoint(e.clientX, e.clientY);
    const targetNodeId = target?.closest('[data-node-id]')?.getAttribute('data-node-id');
    
    const addNode = useCanvasStore.getState().addNode;
    const addChild = useCanvasStore.getState().addChild;

    if (targetNodeId) {
      const targetNode = tree.find(n => n.id === targetNodeId);
      if (targetNode?.type === "container") {
        addChild(targetNodeId, node);
      } else {
        addNode(node)
      }
    } else {
      addNode(node);
    }
    setDragItem(null);
  }

  const present = useCanvasStore((s) => s.present);
  const tree = present.tree;
  const undo = useCanvasStore((s) => s.undo);
  const redo = useCanvasStore((s) => s.redo);

  return (
    <>
      <div className="h-screen w-screen grid grid-rows-[48px_1fr] bg-[var(--app-bg)] text-[var(--app-fg)]">
        <header className="border-b border-[var(--app-line)] flex items-center justify-between px-4 py-2 bg-[var(--app-bg)]">
          <h1 className="font-semibold mr-5">Component Forge</h1>
          <div className="flex items-center gap-3">
            <button
              onClick={undo}
              className="px-2 py-1 bg-[var(--app-card)] border border-[var(--app-line)] rounded text-sm"
            >
              Undo
            </button>

            <button
              onClick={redo}
              className="px-2 py-1 bg-[var(--app-card)] border border-[var(--app-line)] rounded text-sm"
            >
              Redo
            </button>

            <ThemeToggle />
          </div>
        </header>

        <div className="grid grid-cols-[240px_1fr_300px] h-full overflow-hidden">
          <div className="h-full overflow-y-auto bg-[var(--app-card)]">
            <Sidebar onDragStart={handleDragStart} />
          </div>

          <main
            className="relative bg-[var(--app-card)] flex items-center justify-center overflow-hidden"
            onPointerUp={handleCanvasDrop}
          >
            <div className="bg-[var(--app-card)] border border-[var(--app-line)] rounded-lg w-[80%] h-[80%] p-4 overflow-auto space-x-4">
              {renderTree(tree)}
            </div>
            {dragItem && (
              <div
                className="pointer-events-none fixed opacity-70"
                style={{ left: dragPos.x + 10, top: dragPos.y + 10 }}
              >
                {dragItem.preview}
              </div>
            )}
          </main>

          <div className="h-full overflow-y-auto bg-[var(--app-card)]">
            <Inspector />
          </div>
        </div>
      </div>
    </>
  );
}

export default App
