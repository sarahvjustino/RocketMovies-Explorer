import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import { Container, Content } from "./styles";
import { AiOutlineClockCircle } from "react-icons/ai";

import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Title } from "../../components/Title";
import { Rating } from "../../components/Rating";
import { Tag } from "../../components/Tag";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function Preview() {
  const [data, setData] = useState(null);
  const { user } = useAuth();
  const avatarURL = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  function handleUpdate() {
    navigate("/new");
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchNote();
  }, []);

  return (
    <Container>
      <Header />

      {data && (
        <main>
          <Content>
            <div>
              <ButtonText title="Voltar" onClick={handleBack} />
              <button onClick={handleUpdate}>Editar nota</button>
            </div>
            <div className="movieTitle">
              <Title title={data.title} />
              <Rating grade={data.rating} isBigSize={true} />
            </div>
            <div className="movieInfo">
              <span className="createdBy">
                <img src={avatarURL} alt={`Foto de ${user.name}`} />
                <p>Por {user.name}</p>
              </span>
              <span className="createdAt">
                <AiOutlineClockCircle />
                <p>{data.created_at}</p>
              </span>
            </div>

            <p>{data.description}</p>

            {data.tags && (
              <div className="tags">
                {data.tags.map((tag) => (
                  <Tag key={String(tag.id)} name={tag.name} />
                ))}
              </div>
            )}
          </Content>
        </main>
      )}
    </Container>
  );
}
