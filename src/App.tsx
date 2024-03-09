import { Card, Section } from '~/components/';
import { Container, Header } from '~/layouts';

export default function App() {
  return (
    <Container>
      <Header />
      <Section heading="Sortable">
        <Card title="Card 1" description="Description 1" />
      </Section>
    </Container>
  );
}
