import { Container } from "./styles";
import { FiPlus } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

export function Home() {
  return (
    <Container>
      <Header />

      <Button icon={FiPlus} title="Adicionar filme" />
    </Container>
  );
}
