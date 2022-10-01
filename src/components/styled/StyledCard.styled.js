import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledCard = styled(motion.div)`
    display: flex;
    margin: 20px auto;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-radius: 20px;
    width: 95%;
    background: white;
    box-shadow: 2px 5px 10px #00000010;
    
    
    span{
        letter-spacing: 1.3px;
        
    }

    @media(max-width: ${({theme}) => theme.media}){
        width: 100%;
        padding: 10px;
        
    }
`


export const ShortLink = styled.div`
     display: flex;
    justify-content: space-between;
    align-items: center;
    width: 32%;
    color: ${({theme})=> theme.color.button};
    
    
    
    @media(max-width: ${({theme}) => theme.media}){
        width: 46%;
    }
`