import styled from 'styled-components'

export const Container = styled.header`
    background: var(--blue);
`
export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 2rem 1rem 12rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div.logo {
        display: flex;
        align-items: center;
        justify-content: space-between;

        div{
            display: flex;
            align-items: center;
            justify-content: center;
        }

        img {
            position: absolute;
            margin-right: 2rem;
        }

        span {
            position: relative;
            color: var(--shape);
            font-weight: 600;
            font-size: 1.5rem;
            margin-left: 2rem;
        }
    }

    button {
        font-size: 1rem;
        color: #FFF;
        background: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9);
        }
    }
`