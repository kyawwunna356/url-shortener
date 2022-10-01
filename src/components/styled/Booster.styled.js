import styled from "styled-components";

export const Booster = styled.div`
    background: url('./images/bg-boost-desktop.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-color: ${({theme}) => theme.color.darkViolet};
    text-align: center;
    color: white;
    padding: 50px;
    
    button{
        padding: 20px 25px;
        border-radius: 30px;
    }


`