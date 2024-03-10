import { Container, Profile, Logout } from "./styles";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

import { Input } from "../Input";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function Header({ onChange }) {
  const { SignOut, user } = useAuth();

  const navigate = useNavigate();

  function handleSignOut() {
    navigate("/");
    SignOut();
  }

  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  return (
    <Container>
      <h1>RocketMovies</h1>

      <Input placeholder="Pesquisar pelo título" onChange={onChange} />

      <Profile to="/profile">
        <div>
          <strong>{user.name}</strong>
          <Logout to="/" onClick={handleSignOut}>
            sair
          </Logout>
        </div>

        <img src={avatarURL} alt="Foto do Usuário" />
      </Profile>
    </Container>
  );
}
