import { Link } from 'react-router-dom'
import {
  Wrapper,
  Container,
  LogoContainer,
  NavLinks,
  OtherLinks,
} from "./Navigation.styles";

function Navigation() {
  return (
    <Wrapper>
      <Container>
        <LogoContainer>
            <h2><Link to={{pathname: '/'}}>safrion</Link></h2>
        </LogoContainer>
        <NavLinks>
            <ul>
                <li>
                    <Link to={{pathname: '/'}}>Home</Link>
                </li>
                <li>
                    <Link to={{pathname: '/women'}}>Women</Link>
                </li>
                <li>
                    <Link to={{pathname: '/men'}}>Men</Link>
                </li>
            </ul>
        </NavLinks>
        <OtherLinks>
            <ul>
                <li>
                    <span>cat 100</span>
                </li>
                <li>
                    <span className='space'>Shop all III</span>
                </li>
            </ul>
        </OtherLinks>
      </Container>
    </Wrapper>
  );
}

export default Navigation;
