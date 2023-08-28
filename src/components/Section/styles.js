import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    
    > h2{
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 2rem;
        font-weight: 400;
    }
`