import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 7.25rem auto;
    grid-template-areas:
    "header"
    "content";
    
    > main {
        grid-area: content;
        padding: 3.15rem 7.7rem;
        
        overflow-y: auto;

        > .top-content{
            width: 100%;
            display: flex;
            justify-content: space-between;

            margin-bottom: 2.35rem;

            button{
                width: 15rem;
            }
        }
    }
`

export const Content = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    overflow-y: auto;
    padding-right: 0.5rem;

    &&::-webkit-scrollbar-track {
        padding: 1rem;
    }
    
    &&::-webkit-scrollbar {
        width: 0.5rem;
    }
    
    &&::-webkit-scrollbar-thumb {
        margin-left: 1rem;
        border-radius: 0.5rem;
        background: #FF859B;
    }
`