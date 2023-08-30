import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 17.13rem;

    padding: 1.2rem 1rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.WHITE};

    border: none;
    border-radius: .63rem;
    resize: none;

    &&::placeholder{
        color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
`;