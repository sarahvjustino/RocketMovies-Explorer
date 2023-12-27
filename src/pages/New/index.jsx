import { FaArrowLeftLong } from "react-icons/fa6";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Form, Section, Wrapper } from "./styles";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Title } from "../../components/Title";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";

import { api } from "../../services/api";

export function New() {
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState("");
  const [description, setDescription] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleNewMovieNote() {
    if (!title) {
      return alert("Digite o título do filme!");
    }

    if (!rate) {
      return alert("Digite a nota do filme!");
    }

    if (newTag) {
      return alert(
        "Você deixou um marcador sem adicionar. Adicione-o ou apague-o."
      );
    }

    await api.post("/notes", {
      title,
      description,
      rating: rate,
      tags,
    });

    alert("Nota criada com sucesso!");
    navigate("/");
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <Link to="/">
            <FaArrowLeftLong /> Voltar
          </Link>
          <Title title="Novo filme" />
          <Wrapper>
            <Input
              placeholder="Título"
              onChange={(event) => setTitle(event.target.value)}
            />
            <Input
              placeholder="Sua nota (de 0 a 5)"
              onChange={(event) => setRate(event.target.value)}
            />
          </Wrapper>

          <Textarea
            placeholder="Observações"
            onChange={(event) => setDescription(event.target.value)}
          />

          <Section>
            <h3>Marcadores</h3>
            <div className="tags">
              {tags.map((tag, index) => {
                return (
                  <NoteItem
                    key={String(index)}
                    value={tag}
                    OnClick={() => {
                      handleRemoveTag(tag);
                    }}
                  />
                );
              })}

              <NoteItem
                isNew
                placeholder="Novo marcador"
                onChange={(event) => {
                  setNewTag(event.target.value);
                }}
                value={newTag}
                OnClick={handleAddTag}
              />
            </div>
          </Section>

          <Wrapper>
            <Button isDark title="Excluir filme" />
            <Button title="Salvar alterações" onClick={handleNewMovieNote} />
          </Wrapper>
        </Form>
      </main>
    </Container>
  );
}
