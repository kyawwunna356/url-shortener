import styled from "styled-components";

export const Icons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    width: 13%;

    @media(max-width: ${({theme}) => theme.media}){
        width: 50%;
        
    }

`