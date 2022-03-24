import 
{
  Container
  ,FormWrap
  ,Icon
  ,FormContent
  ,Form
  ,FormH1
  ,FormLabel
  ,FormInput
  ,FormButton
  ,Text
  ,BotWrap
} from './SignElements'
import { Link } from 'react-router-dom'

import React from 'react'

function SignIn() {
  return (
    <>
     <Container>
        <FormWrap>
          <Icon to='/'>LOGO</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in to you account</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required />

              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type='password' required />

              <FormButton type='submit'>Continue</FormButton>
              <Text><Link to='/'> Forgot password</Link></Text>
              <BotWrap>
              <Text><Link to='/'> {"<<"} Back</Link></Text>

              <Text><Link to='/'> Sign Up {">>"}</Link></Text>
              </BotWrap>

            </Form>
          </FormContent>
        </FormWrap>

     </Container>

    </>
  )
}

export default SignIn
