import { Container, Profile, Logout } from "./styles";
import { useAuth } from "../../hooks/auth";

import { Input } from "../Input";

export function Header() {
  const { SignOut } = useAuth();
  return (
    <Container>
      <h1>RocketMovies</h1>

      <Input placeholder="Pesquisar pelo título" />

      <Profile to="/profile">
        <div>
          <strong>Sarah Victoria</strong>
          <Logout to="/" onClick={SignOut}>
            sair
          </Logout>
        </div>

        <img src="https://github.com/sarahvjustino.png" alt="Foto do Usuário" />
      </Profile>
    </Container>
  );
}
