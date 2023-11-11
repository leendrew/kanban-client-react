import { useState, useEffect } from 'react';
import { Droppable as DndDroppable } from 'react-beautiful-dnd';
import type { DroppableProps } from 'react-beautiful-dnd';

// React 18 strict mode fix
// or replace react-beautiful-dnd for @hello-pangea/dnd

export function Droppable({ children, ...props }: DroppableProps) {
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    const animation = requestAnimationFrame(() => setIsEnabled(true));

    return () => {
      cancelAnimationFrame(animation);
      setIsEnabled(false);
    };
  }, []);

  if (!isEnabled) {
    return null;
  }

  return <DndDroppable {...props}>{children}</DndDroppable>;
}
