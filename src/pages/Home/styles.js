import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;

    > main {
        padding: 3.15rem 7.7rem;
    }
`

export const Content = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;

    > div{
        width: 100%;
        display: flex;
        justify-content: space-between;

        margin-bottom: 2.35rem;

        button{
            width: 15rem;
        }
    }
`