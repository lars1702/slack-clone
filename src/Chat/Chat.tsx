import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined"
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import db from "../firebase"
import {
  ChatChannelName,
  ChatContainer,
  ChatHeader,
  ChatHeaderLeft,
  ChatHeaderRight,
} from "../styles/Chat-styles"
import ChatInput from "./ChatInput"
import { IChannel, IMessage } from "../types"
import { Message } from "./Message"

const Chat = (): JSX.Element => {
  const { roomId } = useParams()
  const [roomDetails, setRoomDetails] = useState<IChannel>({})
  const [roomMessages, setRoomMessages] = useState<IMessage[]>([])

  useEffect(() => {
    if (roomId) {
      const roomDoc = db.collection("rooms").doc(roomId)
      roomDoc.onSnapshot(snapshot => {
        const data = snapshot?.data()
        if (typeof data === "object") setRoomDetails(data)
      })
      roomDoc
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot(snapshot => {
          const docs = snapshot?.docs
          setRoomMessages(docs.map(doc => doc.data()))
        })
    }
  }, [roomId])

  return (
    <ChatContainer>
      <ChatHeader>
        <ChatHeaderLeft>
          <ChatChannelName>
            <strong>#{roomDetails?.name}</strong>
            <StarBorderOutlinedIcon />
          </ChatChannelName>
        </ChatHeaderLeft>
        <ChatHeaderRight>
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </ChatHeaderRight>
      </ChatHeader>
      <div>
        {roomMessages.map((messageInfo, index) => (
          <Message key={index} messageInfo={messageInfo} />
        ))}
      </div>
      <ChatInput channelName={roomDetails?.name || "room"} channelId={roomId || "room1"} />
    </ChatContainer>
  )
}

export default Chat
