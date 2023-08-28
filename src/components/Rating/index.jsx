import { Container } from "./styles";

import { HiMiniStar, HiOutlineStar } from "react-icons/hi2";

export function Rating({ grade, isBigSize }) {
  let stars = [];
  for (let cont = 1; cont <= 5; cont++) {
    if (cont <= grade) {
      stars.push(<HiMiniStar key={cont} />);
    } else {
      stars.push(<HiOutlineStar key={cont} />);
    }
  }

  return <Container $isbigsize={isBigSize.toString()}>{stars}</Container>;
}
