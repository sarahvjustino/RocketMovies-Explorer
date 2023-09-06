import { Container, Profile } from "./styles";

import { Input } from "../Input";

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>

      <Input placeholder="Pesquisar pelo título" />

      <Profile to="/profile">
        <div>
          <strong>Sarah Victoria</strong>
          <a href="/">sair</a>
        </div>

        <img src="https://github.com/sarahvjustino.png" alt="Foto do Usuário" />
      </Profile>
    </Container>
  );
}
