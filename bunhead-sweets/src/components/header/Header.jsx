import { useState } from 'react'
import styled, { css } from 'styled-components'
import device from '../../breakpoints'
import { Link } from 'react-router-dom'

const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-color: ${(props) => props.theme.bgColor};
  font-family: ${(props) => props.theme.fontFamily};
  position: sticky;
  top: 0;
  z-index: 1000;
`

const NavBar = styled.nav`
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
  min-width: 1320px;
  max-width: 1320px;

  @media ${device.desktopL} {
    min-width: 1320px;
    max-width: 1320px;
  }
  @media ${device.laptopL} {
    min-width: 960px;
    max-width: 960px;
  }
  @media ${device.laptop} {
    min-width: 100%;
    max-width: 100%;
  }

  @media ${device.tablet} {
    display: none;
  }
`

const OptionsWrapper = styled.div`
  display: inline-block;
`

const Options = styled.ul`
  display: flex;
  gap: 20px;
  list-style-type: none;
`

const Option = styled.li`
  text-align: center;
  a {
    color: ${(props) => props.theme.textColor};
    text-decoration: none;
  }
`

const TitleWrapper = styled.div`
  display: inline-block;
  padding-left: 0.5rem;
`

const Title = styled.h1`
  font-size: 3.052rem;
  font-weight: 500;
  margin: 0;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.mainColor};
  }

  @media ${device.laptop} {
    font-size: 1.953rem;
  }
  @media ${device.tablet} {
    font-size: 1.563rem;
  }
  @media ${device.tablet} {
    padding-left: 0.5rem;
  }
`

const ButtonsWrapper = styled.div`
  padding-right: 0.5rem;
`

const SignInButton = styled.button`
  padding: 0.5rem 2rem;
  border: none;
  background: none;
  font-weight: bold;
  font-family: ${(props) => props.theme.fontFamily};
  a {
    color: ${(props) => props.theme.textColor};
    text-decoration: none;
  }
`

const SignUpButton = styled.button`
  padding: 0.5rem 2rem;
  border: none;
  border-radius: 0.2rem;
  background: ${(props) => props.theme.mainColor};
  font-weight: bold;
  font-family: ${(props) => props.theme.fontFamily};
  a {
    color: #fff;
    text-decoration: none;
  }
`

const ContainerMobile = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  background-color: ${(props) => props.theme.bgColor};
  font-family: ${(props) => props.theme.fontFamily};
  position: sticky;
  top: 0;
  z-index: 1000;
  display: none;

  @media ${device.tablet} {
    display: flex;
    height: 4.5rem;
    ${(props) =>
      props.isOpen === true &&
      css`
        height: 100vh;
      `}
  }
`

const NavBarMobile = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  text-align: center;
  background: ${(props) => props.theme.bgColor};
  opacity: 0;
  z-index: -1;
  visibility: hidden;
  transition: all 0.375s;

  ${(props) =>
    props.isOpen === true &&
    css`
      opacity: 1;
      z-index: 100;
      visibility: visible;
    `}

  ::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: -15px;
    background: ${(props) => props.theme.mainColor};
    transform-origin: 0 0;
    transform: skew(-14deg) translateX(-120%);
    transition: all 0.275s 0.1s;
    ${(props) =>
      props.isOpen === true &&
      css`
        transform: skew(-14deg) translateX(0);
      `}
  }

  li:nth-child(1) a {
    transition: all 275ms 175ms;
  }
  li:nth-child(2) a {
    transition: all 275ms 225ms;
  }
  li:nth-child(3) a {
    transition: all 275ms 275ms;
  }
  li:nth-child(4) a {
    transition: all 275ms 325ms;
  }
`

const OptionsWrapperMobile = styled.ul`
  display: inline-flex;
  flex-direction: column;
  height: 100%;
  align-items: flex-end;
  justify-content: center;
  transform: translateX(-18%) skew(-16deg);
  list-style: none;
  padding: 0;
`

const OptionMobile = styled.li`
  display: block;
  margin: 0.5rem 0;
  text-align: right;
  transform: skew(16deg);
  list-style: none;
  padding: 0;
  a {
    opacity: 0;
    transform: translateY(-10px);
    display: block;
    padding: 12px 0;
    color: ${(props) => props.theme.linkMenuColorMobile};
    font-size: 1.4em;
    text-decoration: none;
    font-weight: bold;
    ${(props) =>
      props.isOpen === true &&
      css`
        opacity: 1;
        transform: translateY(0);
      `}
  }
`

const BurgerButton = styled.button`
  position: absolute;
  top: 15px;
  padding-top: 20px;
  right: 15px;
  z-index: 1000;
  background: none;
  border: 0;
  cursor: pointer;
  :focus {
    outline: none;
  }
`

const Burger = styled.span`
  position: relative;
  display: block;
  width: 28px;
  height: 4px;
  margin: 0 auto;
  background: ${(props) => props.theme.mainColor};
  transform: skew(5deg);
  transition: all 0.275s;
  :after,
  :before {
    content: '';
    display: block;
    height: 100%;
    background: ${(props) => props.theme.mainColor};
    transition: all 0.275s;
    ${(props) =>
      props.isOpen === true &&
      css`
        background: ${(props) => props.theme.bgColor};
      `}
  }
  :before {
    transform: translateY(-16px) skew(-10deg);
    ${(props) =>
      props.isOpen === true &&
      css`
        transform: translateY(0px) skew(-10deg) rotate(75deg);
      `}
  }
  :after {
    transform: translateY(-12px) translateX(-2px) skew(-20deg);
    ${(props) =>
      props.isOpen === true &&
      css`
        transform: translateY(-12px) translateX(10px) skew(-20deg);
        opacity: 0;
      `}
  }
  ${(props) =>
    props.isOpen === true &&
    css`
      transform: skew(5deg) translateY(-8px) rotate(-45deg);
      background: ${(props) => props.theme.bgColor};
    `}
`

const BurgerText = styled.span`
  display: block;
  font-size: 0.675rem;
  letter-spacing: 0.05em;
  margin-top: 0.5em;
  text-transform: uppercase;
  font-weight: 500;
  text-align: center;
  color: ${(props) => props.theme.mainColor};
  ${(props) =>
    props.isOpen === true &&
    css`
      color: ${(props) => props.theme.bgColor};
    `}
`

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Container>
        <NavBar>
          <TitleWrapper>
            <Title>
              <Link to='/'>Bunhead's Sweets</Link>
            </Title>
          </TitleWrapper>
          <OptionsWrapper>
            <Options>
              <Option>
                <Link to='/'>Home</Link>
              </Option>
              <Option>
                <Link to='/shop'>Shop</Link>
              </Option>
              <Option>
                <Link to='/shop'>Contact</Link>
              </Option>
              <Option>
                <Link to='/shop'>Team</Link>
              </Option>
            </Options>
          </OptionsWrapper>
          <ButtonsWrapper>
            <SignInButton>
              <Link to='/signin'>Sign in</Link>
            </SignInButton>
            <SignUpButton>
              <Link to='/signup'>Sign up</Link>
            </SignUpButton>
          </ButtonsWrapper>
        </NavBar>
      </Container>
      <ContainerMobile isOpen={isOpen}>
        <Title>
          <Link to='/'>Bunhead's Sweets</Link>
        </Title>
        <NavBarMobile isOpen={isOpen}>
          <OptionsWrapperMobile>
            <OptionMobile isOpen={isOpen}>
              <Link
                to='/'
                onClick={() => {
                  setIsOpen(false)
                }}
              >
                Home
              </Link>
            </OptionMobile>
            <OptionMobile isOpen={isOpen}>
              <Link
                to='/shop'
                onClick={() => {
                  setIsOpen(false)
                }}
              >
                Shop
              </Link>
            </OptionMobile>
            <OptionMobile isOpen={isOpen}>
              <Link
                to='/contact'
                onClick={() => {
                  setIsOpen(false)
                }}
              >
                Contact
              </Link>
            </OptionMobile>
            <OptionMobile isOpen={isOpen}>
              <Link
                to='/team'
                onClick={() => {
                  setIsOpen(false)
                }}
              >
                Team
              </Link>
            </OptionMobile>
          </OptionsWrapperMobile>
        </NavBarMobile>
        <BurgerButton
          onClick={() => {
            setIsOpen(!isOpen)
          }}
        >
          <Burger isOpen={isOpen}></Burger>
          <BurgerText isOpen={isOpen}>Menu</BurgerText>
        </BurgerButton>
      </ContainerMobile>
    </>
  )
}

export default Header
