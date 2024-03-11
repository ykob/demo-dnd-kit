import { ComponentProps } from 'react';
import { Card } from '~/components/';

type SortableCardProps = ComponentProps<typeof Card>;

export function SortableCard({ id, ...props }: SortableCardProps) {
  return <Card key={id} {...props} />;
}
