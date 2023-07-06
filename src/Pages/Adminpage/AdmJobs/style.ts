import { styled } from "styled-components";

export const LinksDiv = styled.div`
    padding: 30px 10vw;
    gap: 60px;

    display: flex;

    .linkEdit {
        text-decoration: none;

        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        font-size: 18px;
        line-height: 20px;
        color: var(--color-black);
    }

    .linkEdit:hover {
        color: var(--color-blue);
    }
`

export const TitleDiv = styled.div`
    padding: 0 10vw;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .linkCreate {
        padding: 15px 20px;

        text-decoration: none;

        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: var(--color-white);

        background-color: var(--color-blue);
        border: 1px solid var(--color-blue);
        border-radius: 255px;
    }

    .linkCreate:hover {
        background-color: transparent;
        color: var(--color-blue);
    }

    .linkCreate:hover > span {
        border: 2px solid var(--color-blue);
        color: var(--color-blue);
    }

    .plusSpan {
        padding: 2px 10px;

        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 20px;
        line-height: 20px;
        color: var(--color-white);


        border: 2px solid var(--color-white);
        border-radius: 50%;
    }
`

export const JobsList = styled.ul`
    width: 100%;
    padding: 50px 10vw;
    gap: 20px;

    display: flex;
    flex-direction: column;

    .listItem {
        width: 100%;
        height: 122px;
        padding: 0 40px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        cursor: pointer;
    }

    .listItem:hover {
        background-color: var(--color-lightblue);
    }

    .innerDiv {
        gap: 20px;

        display: flex;
    }

    .innerDivImg {
        border: 1px solid transparent;
        border-radius: 4px;
    }

    .innerDivImg:hover {
        border: 1px solid var(--color-blue);
        background-color: var(--color-white);
    }
`