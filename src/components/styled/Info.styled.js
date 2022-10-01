import styled from "styled-components";

export const Info = styled.div`
    background: ${({theme}) => theme.color.lightGray};
    padding:  80px 150px;

    @media(max-width: ${({theme}) => theme.media}){
        
        padding: 50px;
        
    }
`