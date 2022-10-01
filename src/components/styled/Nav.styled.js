import styled from "styled-components";

export const Nav = styled.div`
    background: transparent;
    padding: 40px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
`

export const NavLeft = styled.div`
    width: 30%;
    margin-left: -350px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
        color: ${({theme}) => theme.color.grayishViolet}
        
    }
    span:hover{
        color: ${({theme}) => theme.color.veryDarkViolet};
        cursor: pointer;
    }

    @media(max-width: ${({theme}) => theme.media}){
        position: fixed;
        z-index: 999;
        top: 50px;
        right: 50px;
        width: 50%;
        margin-left: 0px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        display: none;
    }
`

export const NavRight = styled.div`
    width: 15%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a{
        text-decoration: none;
        color: ${({theme}) => theme.color.grayishViolet}
    }
    a:hover{
        color: ${({theme}) => theme.color.veryDarkViolet};
    }

    @media(max-width: ${({theme}) => theme.media}){
        
        display: none;
        
    }

`

export const Hamburger = styled.img`
    display: none;
    
    
    @media(max-width: ${({theme}) => theme.media}){
        
        display: block;
        
    }
`