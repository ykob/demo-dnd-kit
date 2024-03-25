import {
  useDroppable,
} from '@dnd-kit/core';

type DroppableProps = {
  dropped: { id: string }[];
};

export function DroppableBlock({ dropped }: DroppableProps) {
  const { isOver, setNodeRef } = useDroppable({
    id: 'droppable',
    data: {
      accepts: ['type1', 'type2'],
    },
  });

  return (
    <div ref={setNodeRef}>
      <div>Droppable</div>
      <div>
        {dropped.map((item, index) => {
          return <div key={index}>{item.id}</div>;
        })}
      </div>
    </div>
  );
};
