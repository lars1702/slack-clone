import React, { useEffect, useState } from "react"
import {
  ChatContainer,
  ChatHeader,
  ChatHeaderRight,
  ChatHeaderLeft,
  ChatChannelName,
} from "./styles/Chat-styles"
import { useParams } from "react-router-dom"
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined"
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined"
import db from "./firebase"
import { IChannel } from "./types"

const Chat = () => {
  const { roomId } = useParams()
  const [roomDetails, setRoomDetails] = useState<IChannel>({})

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot(snapshot => {
          const data = snapshot?.data()
          console.log("DEBUG - data:", data)
          if (typeof data === "object") setRoomDetails(data)
        })
    }
  }, [roomId])

  return (
    <ChatContainer>
      <ChatHeader>
        <ChatHeaderLeft>
          <ChatChannelName>
            <strong># {roomDetails.name}</strong>
            <StarBorderOutlinedIcon />
          </ChatChannelName>
        </ChatHeaderLeft>
        <ChatHeaderRight>
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </ChatHeaderRight>
      </ChatHeader>
    </ChatContainer>
  )
}

export default Chat
