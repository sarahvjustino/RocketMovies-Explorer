import styled from "styled-components";

export const Container = styled.span`
    padding: 0.31rem 1rem;
    background-color: ${({ theme }) => theme.COLORS.GRAY_400};
    color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: .5rem;
    margin-right: .5rem;
`