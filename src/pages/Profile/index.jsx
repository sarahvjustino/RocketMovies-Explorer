import { useState } from "react";
import { Container, Form, Avatar } from "./styles";
import { FiMail, FiLock, FiUser, FiCamera } from "react-icons/fi";

import { api } from "../../services/api";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { useAuth } from "../../hooks/auth";

export function Profile() {
  const { user, updateProfile } = useAuth();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();

  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;
  const [avatar, setAvatar] = useState(avatarURL);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdate() {
    const updated = {
      name,
      email,
      old_password: oldPassword,
      password: newPassword,
    };

    const userUpdated = Object.assign(user, updated);

    await updateProfile({ user: userUpdated, avatarFile });
  }

  function handleAvatarUpdate(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return (
    <Container>
      <header>
        <ButtonText title="Voltar" />
      </header>

      <Form>
        <Avatar>
          <img src={avatar} alt="Foto do Usúario" />

          <label htmlFor="avatar">
            <input type="file" id="avatar" onChange={handleAvatarUpdate} />
            <button>
              <FiCamera />
            </button>
          </label>
        </Avatar>
        <Input
          type="text"
          icon={FiUser}
          placeholder="Nome"
          defaultValue={name}
          onChange={(event) => setName(event.target.value)}
        />
        <Input
          type="text"
          icon={FiMail}
          placeholder="E-mail"
          defaultValue={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          type="password"
          icon={FiLock}
          placeholder="Senha atual"
          onChange={(event) => setOldPassword(event.target.value)}
        />
        <Input
          type="password"
          icon={FiLock}
          placeholder="Nova senha"
          onChange={(event) => setNewPassword(event.target.value)}
        />

        <Button title="Salvar" onClick={handleUpdate} />
      </Form>
    </Container>
  );
}
