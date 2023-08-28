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
        width: 100%;
        padding: 2.5rem 7.7rem;
        overflow-y: auto;
    }
`

export const Content = styled.div`
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    padding-right: 1.5rem;

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

    > .movieTitle, .movieInfo, span, .tags{
        display: flex;
        align-items: center;
    
    }

    > .movieTitle{
        gap: 1.2rem;
        margin: 1.5rem 0;
    }

    > .movieInfo{
        gap: .5rem;

        > span{
            gap: .5rem;
            font-size: 1rem;
            color: ${({ theme }) => theme.COLORS.WHITE};

            > svg{
                font-size: 1rem;
            color: ${({ theme }) => theme.COLORS.PINK};

            }
        }

        > .createdBy{
            > img{
            width: 1.2rem;
            height: 1.2rem;

            border-radius: 50%;
            border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }
    }
    
    > .tags{
        margin:2.5rem 0;
    }

    p{
        font-size: 1rem;
        text-align: justify;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }
    
`