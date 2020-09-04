import React from "react"
import {
  MessageContainer,
  MessageImage,
  MessageText,
  MessageTime,
  MessageUser,
  MessageInnerContainer,
} from "../styles/Message-styles"
import { IMessage } from "../types"
import useAppContext from "../State/StateProvider"

export const Message = ({ messageInfo }: { messageInfo: IMessage }): JSX.Element => {
  const { state } = useAppContext()

  const dateString = (): string => {
    const timeOptions = {
      hour: "2-digit",
      minute: "2-digit",
    }
    if (messageInfo?.timestamp)
      return new Date(messageInfo?.timestamp?.seconds * 1000)?.toLocaleTimeString?.([], timeOptions)
    else return ""
  }

  return (
    <MessageContainer>
      <MessageImage src={state.photoURL} alt={`${state.user} avatar`}></MessageImage>
      <MessageInnerContainer>
        <MessageUser>
          {state.user}

          <MessageTime>{dateString()}</MessageTime>
        </MessageUser>
        <MessageText>{messageInfo.message}</MessageText>
      </MessageInnerContainer>
    </MessageContainer>
  )
}
