import styled from "styled-components";

export const Form = styled.form`
 
    background: url('./images/bg-shorten-desktop.svg');
    background-color: ${({theme}) => theme.color.darkViolet};
    margin: auto;
    width: 75%;
    border-radius: 20px;
    padding: 50px;
    position: relative;
    bottom: -70px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media(max-width: ${({theme}) => theme.media}){
        flex-direction: column;
        bottom: -200px;
        width: 85%;
        padding: 20px;
        margin: 150px auto; 
        margin-top: 10px;
    }
   

`

export const Input = styled.input`
    font-size: 1.3rem;
    width: 70%;
    padding: 20px;
    border-radius: 15px;
    border: 4px solid ${({valid}) => valid ? "white" : "tomato"};
    font-weight: bold;
    @media(max-width: ${({theme}) => theme.media}){
        font-size: 1rem;
        padding: 15px; 
        width: 95%;
        
    }
`

export const FormButton = styled.button`
    font-size: 1.3rem;
    width: 20%;
    padding: 20px; 
    border-radius: 15px;
    color: white;
    font-weight: bold;
    border-radius: 15px;
    border: none;
    background-color: ${({theme}) => theme.color.button};
   
    @media(max-width: ${({theme}) => theme.media}){
        font-size: 1.2rem;
        text-align: center;
        padding: 15px; 
        width: 100%;
        margin-top: 20px;
    }
    
    
    &:hover{
        opacity: 0.85;
        cursor: pointer;
    }

`

export const Error = styled.h4`
    color: red;
    margin: 0 150px;
    letter-spacing: 1.5px;
    margin-bottom: -50px;
    @media(max-width: ${({theme}) => theme.media}){
        margin: 0 50px;
        letter-spacing: 1.5px;
    
        
        margin-bottom: -190px; 
        
    }
`