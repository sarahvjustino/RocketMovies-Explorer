import styled from "styled-components";

export const Container = styled.span`
    >a {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        font-size: 1rem;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.PINK};
        
        > svg{
            font-size: 1.3rem;
            color: ${({ theme }) => theme.COLORS.PINK};
        }
    }
`