import { Container } from "./styles";

import { BiArrowBack } from "react-icons/bi";

export function ButtonText() {
  return (
    <Container>
      <a href="/">
        <BiArrowBack /> Voltar
      </a>
    </Container>
  );
}
