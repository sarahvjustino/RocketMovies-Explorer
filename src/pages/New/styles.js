import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 7.25rem auto;
    grid-template-areas:
    "header"
    "content";

    > main{
        grid-area: content;
        padding: 0 7.7rem 2.5rem;
        overflow-y: auto;
    }
`

export const Form = styled.form`
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    padding-right: 1.5rem;
    margin-top: 2.5rem;

    &&::-webkit-scrollbar-track {
        padding: 1rem;
    }
    
    &&::-webkit-scrollbar {
        width: 0.5rem;
    }
    
    &&::-webkit-scrollbar-thumb {
        margin-left: 1rem;
        border-radius: 0.5rem;
        background: ${({ theme }) => theme.COLORS.PINK};
    }

    > a{
        width: fit-content;
        display: flex;
        align-items: center;
        gap: .8rem;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > textarea{
        margin-top: 2.5rem;
    }

    > div:nth-child(2){
        margin: 1.5rem 0 2.5rem;
    }
`

export const Section = styled.section`   
    margin: 2.5rem 0 1.5rem;

    > h3{
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 1.25rem;
        font-weight: 400;
        margin-bottom: 1.5rem;
    }

    > .tags{
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        border-radius: .5rem;

        display: flex;
        align-items: center;
        gap: 1.5rem;
        flex-wrap: wrap;
        padding: 1rem;
        margin-bottom: 2.5rem;
    }
`

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 2.5rem;
`