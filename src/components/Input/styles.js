import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    
    border-radius: 0.63rem;
    
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.WHITE};
    
    > input{
        width: 100%;
        height: 3.5rem;
        
        padding: 1.19rem 1.5rem;
        border: none;
        
        background-color: transparent;

        font-size: 0.88rem;

        &::placeholder{
            color: ${({ theme }) => theme.COLORS.GRAY_200};
        }
    }
`