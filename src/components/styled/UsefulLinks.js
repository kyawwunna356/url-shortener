import styled from "styled-components";

export const  UsefulLinks = styled.ul`
    list-style-type: none;

    margin-top: 0px;
    li {
        padding: 10px 0;
        
    }
    li a {
        text-decoration: none;
        color: ${({theme}) => theme.color.grayishViolet};
    }
    li a:hover{
        color: ${({theme}) => theme.color.button};
    }
    
    li:first-child {
        color: white;
        font-weight: bold;
    }
    @media(max-width: ${({theme}) => theme.media}){
        
        padding: 15px;
        
    }

`