import styled from "styled-components";

export const InfoHeading = styled.div`
    text-align: center;
    width: 38%;
    margin: 50px auto;

    
    h1{
        color: ${({theme}) => theme.color.veryDarkViolet};
        font-size: 3rem;
        margin-bottom: 15px;
    }
    p{
        line-height: 1.5;
        font-size: 1.2rem;
        color: ${({theme}) => theme.color.grayishViolet};
    }
    @media(max-width: ${({theme}) => theme.media}){
        width: 90%;
        
    }
`