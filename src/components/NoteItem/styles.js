import styled from "styled-components";

export const Container = styled.div`
    max-width: 12rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_700};
    border-radius: .63rem;
    
    border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.GRAY_200}` : "none"};
    padding: 0 1rem;
    
    > input{
        height: 3.5rem;
        width: 100%;
        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;
        border: none;
        font-size: 1rem;
    }

    > button{
        background: none;
        border: none;
        
        > svg{
            color: ${({ theme }) => theme.COLORS.PINK};
            font-size: 1.5rem;
        }
    }
`