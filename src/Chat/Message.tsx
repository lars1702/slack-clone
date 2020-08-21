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
  let date = ""
  if (messageInfo?.timestamp)
    date = new Date(messageInfo?.timestamp?.seconds * 1000)?.toLocaleTimeString?.([], {
      hour: "2-digit",
      minute: "2-digit",
    })

  return (
    <MessageContainer>
      <MessageImage src={messageInfo.userImage} alt={`${messageInfo.user} avatar`}></MessageImage>
      <MessageInnerContainer>
        <MessageUser>
          {messageInfo.user}
          <MessageTime>{date}</MessageTime>
        </MessageUser>
        <MessageText>{messageInfo.message}</MessageText>
      </MessageInnerContainer>
    </MessageContainer>
  )
}
