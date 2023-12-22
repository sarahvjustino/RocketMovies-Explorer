import styled from "styled-components";
import backgroundImg from "../../assets/background.png";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`

export const Form = styled.form`
    padding: 0 8.5rem;

    display: flex;
    flex-direction: column;
    justify-content: center;

    > div{
        margin-bottom: .5rem;
    }

    > h1{
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 3rem;
        font-weight: bold;
    }

    p{
        color: ${({ theme }) => theme.COLORS.GRAY_200};
        font-size: .88rem;
        font-weight: 400;
    }

    > h2{
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 1.5rem;
        font-weight: 500;
        margin: 3rem 0;
    }

    > button{
        margin: 1.5rem 0 2.6rem;
    }

    > a{
        font-size: 1rem;
        text-align: center;
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`