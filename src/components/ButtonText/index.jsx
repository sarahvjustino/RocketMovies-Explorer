import { Container } from "./styles";

import { BiArrowBack } from "react-icons/bi";

export function ButtonText({ title }) {
  return (
    <Container>
      <a href="/">
        <BiArrowBack /> {title}
      </a>
    </Container>
  );
}
