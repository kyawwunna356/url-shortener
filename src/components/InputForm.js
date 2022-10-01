import React, { useTransition } from 'react'
import { useTheme } from 'styled-components'
import { Button } from './styled/Button.styled'
import { Input, Form, FormButton,Error } from './styled/Form.styled'



function InputForm({input,handleInput,shorten,valid,error}) {
  const theme = useTheme('theme')
  return (
   <>
     {error.error ? <Error>{error.text}</Error> : null}
    <Form>
        <Input placeholder="Enter a url" type='text' required value={input} onChange={handleInput} valid={valid}></Input>
        <FormButton onClick={shorten}>Shorten It!</FormButton>
    </Form>
   </>
  )
}

export default InputForm