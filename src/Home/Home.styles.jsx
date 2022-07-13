import styled from 'styled-components'

export const Wrapper = styled.main`
    height: 100%;
    width: 100%;
    padding: 0 1.45em 1em;
`

export const Container = styled.div`
    height: 100%;
    display: flex;
    gap: 1em;

    .hero__text {
        min-height: 95%;
        /* width: 100%; */

        &-inner {
            position: relative;
            bottom: -23.955%;
            left: 80%;
            height: 100%;
            display: flex;
            flex-direction: column;
            line-height: .95;
            transform: rotate(-90deg);

            span {
                display: block;
                font-family: var(--secondary-font);
                font-weight: 600;
                font-size: 2.25rem;
                color: var(--color-gray);
                text-transform: uppercase;
            }
        }
    }

    .hero__image {
        &-container {
            position: relative;
            height: 95%;
            width: 800px;

            .blind {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
                z-index: 1;
                background: var(--color-black);
            }

            img {
                height: 100%;
                width: 100%;
            }
        }
    }

    .hero__link {
        width: 100%;

        &-container {
            display: flex;
            align-items: center;
            justify-content: center;
            padding-top: 2em;

            span {
                font-size: 1.115rem;
                text-transform: uppercase;
                color: var(--color-gray);
                font-weight: 600;
            }
        }
    }
`

