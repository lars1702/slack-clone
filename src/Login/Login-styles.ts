import styled from "styled-components/macro"
import { Button } from "@material-ui/core"

export const LoginContainer = styled.div`
  height: 100vh;
  background-color: #f8f8f8;
  display: grid;
  place-items: center;
`

export const LoginErrorMessage = styled.p`
  color: red;
  min-height: 10px;
  font-size: 18px;
  padding: 20px 0px 0px 0px;
`

export const InnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  & svg {
    width: 100px;
    height: 100px;
    margin-bottom: 40px;
  }
`

export const LoginButton = styled(Button)`
  /* && trumps MUI's specificity without using !important */
  && {
    width: 200px;
    margin-top: 50px;
    text-transform: inherit;
    background-color: #0a8d48;
    color: whitesmoke;
    font-size: 16px;
    :hover {
      color: rgb(51, 51, 51);
      background-color: #13af5c;
      transition: background-color 150ms, color 150ms;
    }
  }
`
