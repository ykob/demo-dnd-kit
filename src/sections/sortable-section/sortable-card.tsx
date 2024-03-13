import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { ComponentProps } from 'react';
import { Card } from '~/components/';

type SortableCardProps = ComponentProps<typeof Card> & {
  id: string;
};

export function SortableCard({ id, ...props }: SortableCardProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id,
    });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Card
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      {...props}
    />
  );
}
