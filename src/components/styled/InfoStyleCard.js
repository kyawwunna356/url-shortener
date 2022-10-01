import styled from "styled-components";

export const InfoStyleCard = styled.div`
    padding: 15px;
    width: 28%;

    div{
        background-color: ${({theme}) => theme.color.darkViolet};
        padding: 20px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
    }

    p{
        color: ${({theme}) => theme.color.grayishViolet};
        line-height: 1.5;
    }
    @media(max-width: ${({theme}) => theme.media}){
        text-align: center;
        width: 90%;
        div{
            margin: auto;
        }
    }


`
