import { Container, Form, Section, Wrapper } from "./styles";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Title } from "../../components/Title";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <ButtonText title="Voltar" />
          <Title title="Novo filme" />
          <Wrapper>
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)" />
          </Wrapper>

          <Textarea placeholder="Observações" />

          <Section>
            <h3>Marcadores</h3>
            <div className="tags">
              <NoteItem value="React" />
              <NoteItem isNew placeholder="Novo marcador" />
            </div>
          </Section>

          <Wrapper>
            <Button isDark title="Excluir filme" />
            <Button title="Salvar alterações" />
          </Wrapper>
        </Form>
      </main>
    </Container>
  );
}
