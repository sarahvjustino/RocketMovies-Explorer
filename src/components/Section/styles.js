import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    
    > h2{
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 2rem;
        font-weight: 400;
    }
`