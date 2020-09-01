import styled from "styled-components/macro"

export const LoginContainer = styled.div`
  height: 100vh;
  background-color: #f8f8f8;
  display: grid;
  place-items: center;
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
  & > button {
    margin-top: 50px;
    text-transform: inherit;
    background-color: #0a8d48;
    color: white;
  }
`
