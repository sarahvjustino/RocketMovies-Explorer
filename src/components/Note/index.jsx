import { Container } from "./styles";

import { Tag } from "../../components/Tag";
import { Rating } from "../../components/Rating";

export function Note({ data, rating, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      <Rating grade={rating}></Rating>
      <p>{data.description}</p>

      {data.tag && (
        <footer>
          {data.tag.map((tag) => (
            <Tag key={tag.id} name={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  );
}
