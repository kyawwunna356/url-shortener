import styled from "styled-components";

export const Footer = styled.div`
    display: flex;
    padding: 100px;
    align-items: flex-start;
    justify-content: space-around;
    background-color: ${({theme}) => theme.color.veryDarkViolet};

    height: 200px;
    svg{
        margin-top: 50px;
    }

    @media(max-width: ${({theme}) => theme.media}){
        flex-direction: column;
        padding: 50px;
        height: auto;
        justify-content: center;
        align-items:center;
        text-align: center;
        svg{
        margin-top: 50px;
        margin-bottom: 50px;
    }
    }
`