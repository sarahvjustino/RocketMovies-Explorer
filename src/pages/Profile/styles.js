import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    > header{
        height: 9rem;
        width: 100%;
        display: flex;
        align-items: center;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    
        padding: 0 9rem;
    }
`

export const Form = styled.form`
    max-width: 21.25rem;
    margin: 2rem auto;

    > div:nth-child(4){
        margin-top: 1.5rem;
    }

    > div{
        margin-bottom: .5rem;
    }

    >button{
        margin-top: 1.5rem;
    }
`

export const Avatar = styled.div`
    position: relative;
    width: 11.63rem;
    height: 11.63rem;
    margin: -7.75rem auto;

    > img{
        width: 11.63rem;
        height: 11.63rem;
        border-radius: 50%
    }

    > label{
        width: 3rem;
        height: 3rem;

        position: absolute;
        bottom: 7px;
        right: 7px;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 50%;

        cursor: pointer;

        input {
            display: none;
        }

        button{
            border: none;
            background: transparent;
        }

        svg{
            width: 1.25rem;
            height: 1.25rem;
            color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        }
    }
`