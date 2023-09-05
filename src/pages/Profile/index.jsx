import { Container, Form, Avatar } from "./styles";
import { FiMail, FiLock, FiUser, FiCamera } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function Profile() {
  return (
    <Container>
      <header>
        <ButtonText />
      </header>

      <Form>
        <Avatar>
          <img
            src="https://github.com/sarahvjustino.png"
            alt="Foto do Usúario"
          />

          <label htmlFor="avatar">
            <input type="file" id="avatar" />
            <button>
              <FiCamera />
            </button>
          </label>
        </Avatar>
        <Input
          type="text"
          icon={FiUser}
          placeholder="Nome"
          defaultValue="Sarah Victoria Justino de Castro"
        />
        <Input
          type="text"
          icon={FiMail}
          placeholder="E-mail"
          defaultValue="sarahvictoria@email.com"
        />
        <Input type="password" icon={FiLock} placeholder="Senha atual" />
        <Input type="password" icon={FiLock} placeholder="Nova senha" />

        <Button title="Salvar" loading />
      </Form>
    </Container>
  );
}
