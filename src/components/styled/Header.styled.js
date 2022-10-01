import styled from "styled-components";

export const Header = styled.div`
    margin: 35px 150px;
    height: 90vh;
    

    @media(max-width: ${({theme}) => theme.media}){
        
        margin: 15px 50px;
        
    }
`
