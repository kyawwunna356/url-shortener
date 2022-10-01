import styled from 'styled-components';

export const Button = styled.button`
    font-size: 18px;
    padding: 10px 25px;
    border-radius: 20px;
    color: white;
    border: none;
    background-color: ${({color})=> color};
    font-weight: bold;

    &:hover{
        opacity: 0.85;
        cursor: pointer;
    }

`