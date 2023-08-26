import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 7.25rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;

    padding: 1.5rem 7.7rem;

    grid-area: "header";

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};

    > h1{
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 1.5rem;
        font-weight: bold;
    }
`
export const Profile = styled.div`
    display: flex;
    align-items: center;

    gap: 0.56rem;

    > div{
        display: flex;
        flex-direction: column;

        font-size: 0.88rem;
        color: ${({ theme }) => theme.COLORS.WHITE};

        > a{
            color: ${({ theme }) => theme.COLORS.GRAY_200};
        }
    }

    > img {
        width: 4rem;
        height: 4rem;

        border-radius: 50%;
        border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
    }
`