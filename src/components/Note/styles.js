import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    max-height: 14rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    padding: 2rem;

    border: none;
    border-radius: 1rem;
    text-align: left;

    > h1{
        font-size: 1.5rem;
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.WHITE};
        margin-bottom: .5rem;
    }

    > p{
        font-size: 1rem;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.GRAY_100};

        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;

        max-height: 3.3rem;
        margin: 1rem 0;
    }
    
`