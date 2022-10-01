import styled from "styled-components";

export const InfoBody = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 400px;
   

    div:nth-child(1){
        align-self: start;
    }

    div:nth-child(3){
        align-self: center;
    }

    div:nth-child(5){
        align-self: end;
    }

      
    @media(max-width: ${({theme}) => theme.media}){
       flex-direction: column;
       height: auto;

       div:nth-child(1){
        align-self: center;
    }
        div:nth-child(2){
            transform: rotate(90deg);
        }

        div:nth-child(3){
            align-self: center;
        }
        div:nth-child(4){
            transform: rotate(90deg);
        }

        div:nth-child(5){
            align-self: center;
        }
    }

`