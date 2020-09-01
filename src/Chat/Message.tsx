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

export const Message = ({ messageInfo }: { messageInfo: IMessage }) => {
  console.log("DEBUG - messageInfo:", messageInfo)

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
        <MessageText>{messageInfo.message}</MessageText>
      </MessageInnerContainer>
    </MessageContainer>
  )
}
