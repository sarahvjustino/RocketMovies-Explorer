import { Container } from "./styles";

export function Button({ title, loading = false, icon: Icon }) {
  return (
    <Container type="button" disabled={loading}>
      {Icon && <Icon size="20" />}
      {title}
    </Container>
  );
}
