import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    align-items: center;

    &>div,&>ul {
        flex: 1;
    }
    img{
        width: 640px;
    }

    @media(max-width: ${({theme}) => theme.media}){
        flex-direction: column-reverse;

        align-items: center;
        justify-content: center;
        text-align: center;
        img{
            width: 300px;
            margin-left: -100px;
        }
    }

`