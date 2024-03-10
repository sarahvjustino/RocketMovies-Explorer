import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import { Container, Content } from "./styles";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Title } from "../../components/Title";
import { Note } from "../../components/Note";

export function Home() {
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);
  const [notes, setNotes] = useState([]);

  const navigate = useNavigate();

  function handleNoteDetails(id) {
    navigate(`/preview/${id}`);
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags");
      setTags(response.data);
    }

    fetchTags();
  }, []);

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}`);

      setNotes(response.data);
    }

    fetchNotes();
  }, [search]);

  return (
    <Container>
      <Header onChange={(event) => setSearch(event.target.value)} />
      <main>
        <div className="top-content">
          <Title title="Meus filmes" />
          <Link to="/new">
            <Button icon={FiPlus} title="Adicionar filme" />
          </Link>
        </div>
        <Content>
          {notes.map((note) => (
            <Note
              key={String(note.id)}
              data={note}
              rating={note.rating}
              onClick={() => handleNoteDetails(note.id)}
            />
          ))}
          ,
        </Content>
      </main>
    </Container>
  );
}
