import { Container } from "./styles";

export function Button({ title, loading = false, icon: Icon, isDark }) {
  return (
    <Container
      type="button"
      disabled={loading}
      className={isDark ? "dark-button" : "light-button"}
    >
      {Icon && <Icon size="20" />}
      {title}
    </Container>
  );
}
