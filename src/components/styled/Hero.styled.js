import styled from "styled-components";

export const Hero = styled.div`
    h1 {
        font-size: 4.5rem;
        color: ${({theme}) => theme.color.veryDarkBlue};
        margin-bottom: 10px;
    }


    p{
        line-height: 1.5;
        color: ${({theme}) => theme.color.grayishViolet};
    }

    img{
        margin-right: -150px;
    }
    @media(max-width: ${({theme}) => theme.media}){
        h1{
            font-size: 3.5rem;
        }
    }
`