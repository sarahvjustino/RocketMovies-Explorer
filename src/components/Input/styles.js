import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: .75rem;
    padding: 0 .75rem;
    
    border-radius: 0.63rem;
    
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    
    > input{
        padding: 1.19rem 0;
        color: ${({ theme }) => theme.COLORS.WHITE};
        width: 100%;
        height: 3.5rem;
        
        border: none;
        
        background-color: transparent;

        font-size: 0.88rem;

        &::placeholder{
            color: ${({ theme }) => theme.COLORS.GRAY_200};
        }
    }

    > svg{
        color: ${({ theme }) => theme.COLORS.GRAY_200};
    }

    `