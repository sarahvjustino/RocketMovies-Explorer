import { Container, Profile, Logout } from "./styles";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import { Input } from "../Input";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function Header() {
  const { SignOut, user } = useAuth();
  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;
  return (
    <Container>
      <h1>RocketMovies</h1>

      <Input placeholder="Pesquisar pelo título" />

      <Profile to="/profile">
        <div>
          <strong>{user.name}</strong>
          <Logout to="/" onClick={SignOut}>
            sair
          </Logout>
        </div>

        <img src={avatarURL} alt="Foto do Usuário" />
      </Profile>
    </Container>
  );
}
