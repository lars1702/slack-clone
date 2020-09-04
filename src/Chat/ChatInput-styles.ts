import styled from "styled-components/macro"

export const ChatInputContainer = styled.div`
  border-radius: 20px;
  & form {
    position: relative;
    display: flex;
    justify-content: center;
  }
  button {
    display: none;
  }
`

export const Input = styled.input`
  box-sizing: border-box;
  position: fixed;
  bottom: 10px;
  width: 60%;
  border: 1px solid grey;
  border-radius: 4px;
  padding: 12px;
`
