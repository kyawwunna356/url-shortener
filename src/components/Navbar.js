import React from 'react'
import { Nav } from './styled/Nav.styled'
import { NavLeft } from './styled/Nav.styled'
import { Hamburger } from './styled/Nav.styled'
import { NavRight } from './styled/Nav.styled'
import {Button} from './styled/Button.styled'
import { useTheme } from 'styled-components'

function Navbar() {
    const theme = useTheme('theme')
  return (
    <Nav>
        <img src="./images/logo.svg" alt="" />
        <Hamburger src="./images/icon-fully-customizable.svg" alt="" />
        <NavLeft>
            <span>Features</span>
            <span>Pricing</span>
            <span>Resources</span>
        </NavLeft>
        <NavRight>
            <a href="#">Login</a>
            <Button color={theme.color.button}>Sign up</Button>
        </NavRight>
    </Nav>
  )
}

export default Navbar