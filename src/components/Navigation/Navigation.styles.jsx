import styled from 'styled-components'

export const Wrapper = styled.header`
    position: relative;
    height: 18vh;
    width: 100%;
    padding: 1.225em 1.195em;
    background: var(--color-white);
    /* background: var(--soft-pink); */
    z-index: 1000;
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
`

export const LogoContainer = styled.div`
    h2 {
        a {
            text-decoration: none;
            color: var(--color-black);
            font-family: var(--primary-font);
            font-weight: 600;
            letter-spacing: .055em;
        }
    }
`

export const NavLinks = styled.nav`
    ul {
        display: flex;
        
        li {
            list-style: none;

            a {
                text-decoration: none;
                text-transform: uppercase;
                color: var(--color-black);
                font-size: .725rem;
                
                &::after {
                    content: '';
                    display: block;
                    width: 0;
                    height: .165em;
                    background: #000;
                    transition: .3s ease-in-out;
                }

                &:hover::after {
                    width: 100%;
                }
            }

            &:not(:last-of-type) {
                margin-right: 5.855em;
            }
        }
    }
`

export const OtherLinks = styled.div`
    ul {
        display: flex;

        li {
            list-style: none;

            span {
                text-transform: uppercase;
                color: var(--color-black);
                font-size: .755rem;

                &.space {
                    letter-spacing: .45em;
                }
            }

            &:not(:last-of-type) {
                margin-right: 3.855em;
            }
        }
    }
`