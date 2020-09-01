import React, { useContext } from "react"
import {
  MessageContainer,
  MessageImage,
  MessageText,
  MessageTime,
  MessageUser,
  MessageInnerContainer,
} from "../styles/Message-styles"
import { IMessage } from "../types"
import AppContext from "../State/StateProvider"

export const Message = ({ messageInfo }: { messageInfo: IMessage }) => {
  const { state } = useContext(AppContext)

  const dateString = () => {
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
      <MessageImage src={messageInfo.userImage} alt={`${messageInfo.user} avatar`}></MessageImage>
      <MessageInnerContainer>
        <MessageUser>
          {messageInfo.user}

          <MessageTime>{dateString()}</MessageTime>
        </MessageUser>
        <MessageText>
          {state.user}
          {state.email}
          {state.photoURL}
          {messageInfo.message}
        </MessageText>
      </MessageInnerContainer>
    </MessageContainer>
  )
}
