import styled from 'styled-components'

export const Wrapper = styled.section`
    height: 100vh;
    width: 100%;
    background: var(--soft-pink);
`

export const Container = styled.div`
    display: flex;
    gap: 2.5em;
    /* grid-template-columns: repeat(5, 12rem); */

    .box {

        &__inner {
            display: flex;
            flex-direction: column;
        }

        &__1 {
            margin-top: 3.255em;

            .text__container {
                display: flex;
                flex-direction: column;
                line-height: 1.092;
                margin-left: 2em;
                margin-bottom: 4em;

                span {
                    text-transform: uppercase;
                    font-size: .85rem;
                    font-family: var(--primary-font);
                    font-weight: 600;

                    &:first-of-type {
                        color: var(--hard-pink);
                    }
                }
            }
        }

        &__2 {
            /* margin-top: 3.255em; */

            .text__container {
                display: flex;
                flex-direction: column;
                line-height: 1.092;
                margin-left: 3.155em;
                margin-bottom: 4em;

                span {
                    text-transform: uppercase;
                    font-size: .85rem;
                    font-family: var(--primary-font);
                    font-weight: 600;

                }
            }

            .text__container2 {
                margin-top: 2.655em;
                display: flex;
                flex-direction: column;
                line-height: 1.092;
                margin-left: .255em;
                margin-bottom: 4em;
                text-align: center;

                span {
                    &:first-of-type {
                        font-size: 1.55rem;
                        font-weight: 600;
                    }

                    &:last-of-type {
                        font-size: .95rem;
                        font-weight: 300;
                    }
                }
            }
        }

        &__3 {
            margin-top: 4.900em;
        }

        &__4 {
            .box__inner {
                .image__container {
                    margin-bottom: 1.75em;
                }

                .text__container2 {
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    small {
                        margin-bottom: 2.25em;
                        font-size: .95rem;
                    }

                    span {
                        display: block;
                        font-family: var(--secondary-font);
                        font-weight: 700;
                        font-size: 2.25rem;
                        color: var(--color-black);
                        text-transform: uppercase;
                        line-height: .95;
                    }
                }
            }
        }

        &__5 {
            margin-top: 1.120em;

            .box__inner {
                .text__container {
                    margin-left: 2.45em;
                    margin-bottom: 2.49em;

                    span {
                        font-size: .95rem;
                    }
                }
            }
        }

        }
    .view {
        position: relative;
        top: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100px;
        width: 100px;
        background-color: var(--hard-pink);
        border-radius: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        
        span {
            margin-bottom: .45em;
            width: inherit;
            font-size: .65rem;
            letter-spacing: .065em;
            text-align: center;
        }
    }
`
