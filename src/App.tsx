import { Container, Header } from '~/layouts';
import { DroppableSection, SortableSection } from '~/sections';

export default function App() {
  return (
    <Container>
      <Header />
      <DroppableSection />
      <SortableSection />
    </Container>
  );
}
