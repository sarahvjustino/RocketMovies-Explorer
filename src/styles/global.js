import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }

    body, button, input, textarea{
        font-family: 'Roboto Slab', serif;
        font-size: 1rem;
    }

    a{
        text-decoration: none;
    }

    button, a{
        cursor: pointer;
        transition: filter .2s;

        &:hover{
            filter: brightness(0.9);
        }
    }
`