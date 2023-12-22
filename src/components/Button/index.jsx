import { Container } from "./styles";

export function Button({
  title,
  loading = false,
  icon: Icon,
  isDark,
  ...rest
}) {
  return (
    <Container
      type="button"
      disabled={loading}
      className={isDark ? "dark-button" : "light-button"}
      {...rest}
    >
      {Icon && <Icon size="20" />}
      {title}
    </Container>
  );
}
