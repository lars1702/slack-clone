import styled from "styled-components/macro"

export const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  padding-bottom: 150px;
`
export const ChatHeader = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
`

export const ChatHeaderRight = styled.div`
  p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }
`

export const ChatHeaderLeft = styled.div``

export const ChatChannelName = styled.h4`
  text-transform: lowercase;
  display: flex;
  strong {
  }
  & > .MuiSvgIcon-root {
    margin-left: 10px;
    font-size: 18px;
  }
`
