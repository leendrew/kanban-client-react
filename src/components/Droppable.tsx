import { useEffect, useState } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import type { DroppableProps } from 'react-beautiful-dnd';

// React 18 fix
// or replace react-beautiful-dnd for @hello-pangea/dnd

export const StrictModeDroppable = ({ children, ...props }: DroppableProps) => {
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

  return <Droppable {...props}>{children}</Droppable>;
};
