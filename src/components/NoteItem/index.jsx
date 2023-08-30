import { Container } from "./styles";
import { IoClose, IoAdd } from "react-icons/io5";

export function NoteItem({ isNew, value, OnClick, ...rest }) {
  return (
    <Container isNew={isNew}>
      <input type="text" value={value} readOnly={!isNew} {...rest} />

      <button onClick={OnClick} type="button">
        {isNew ? <IoAdd /> : <IoClose />}
      </button>
    </Container>
  );
}
