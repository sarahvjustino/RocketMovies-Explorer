import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
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
`