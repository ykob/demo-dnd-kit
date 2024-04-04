import { Container, Header } from '~/layouts';
import {
  DroppableSection,
  SortableSection,
  TwoWayDroppableSection,
} from '~/sections';

export default function App() {
  return (
    <Container>
      <Header />
      <DroppableSection />
      <TwoWayDroppableSection />
      <SortableSection />
    </Container>
  );
}
