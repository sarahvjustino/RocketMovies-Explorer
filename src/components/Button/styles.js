import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 3rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    padding: 0.85rem 2rem;

    font-size: 1rem;
    font-weight: 500;

    border: none;
    border-radius: .5rem;

    &:disabled{
        opacity: 0.5;
    }
`