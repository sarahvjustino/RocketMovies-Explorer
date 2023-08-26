import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 3rem;

    display: flex;
    align-items: center;

    padding: 2rem;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    font-size: 1rem;

    border: none;
    border-radius: .5rem;

    > svg {
        color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
`