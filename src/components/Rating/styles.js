import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: ${({ $isbigsize }) => $isbigsize ? "center" : "flex-start"};
    gap: 1rem;

    > svg{
        font-size: ${({ $isbigsize }) => $isbigsize ? "2.2rem" : "1.4rem"};
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`