import React, { useState } from "react"
import { ChatInputContainer, Input } from "./ChatInput-styles"
import { Button } from "@material-ui/core"
import firebase from "firebase"
import db from "../firebase"
import useAppContext from "../State/StateProvider"

interface IChannelInput {
  channelName: string
  channelId: string
}

const ChatInput = ({ channelName, channelId }: IChannelInput): JSX.Element => {
  const [input, setInput] = useState<string>("")
  const { state } = useAppContext()

  const sendMessage = (e: React.FormEvent): void => {
    console.log("DEBUG - e:", e)
    e.preventDefault()
    if (channelId) {
      db.collection("rooms").doc(channelId).collection("messages").add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: state.user,
      })
      setInput("")
    }
  }

  return (
    <ChatInputContainer>
      <form>
        <Input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder={`To ${channelName}`}
          type="text"
          onSubmit={sendMessage}
        />
        <Button type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  )
}

export default ChatInput
