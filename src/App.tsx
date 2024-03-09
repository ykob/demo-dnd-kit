import { Card } from '~/components/';
import { Container, Header } from '~/layouts';

export default function App() {
  return (
    <Container>
      <Header />
      <section>
        <h2>Sortable</h2>
        <div>
          <Card title="Card 1" description="Description 1" />
        </div>
      </section>
    </Container>
  );
}
