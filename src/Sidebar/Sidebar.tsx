import React, { useState, useEffect } from "react"
import {
  Sidebar as SidebarStyled,
  SidebarHeader,
  SidebarMenu,
  SidebarChannels,
  SidebarInfo,
} from "../styles/Sidebar-styles"
import SidebarOptions from "./SidebarOptions"
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"
import CreateIcon from "@material-ui/icons/Create"
import db from "../firebase"
import { ChannelsType } from "../types"

const Sidebar = () => {
  const [channels, setChannels] = useState<ChannelsType>([])

  useEffect(() => {
    //get channel data from firebase
    db.collection("rooms").onSnapshot(snapshot =>
      setChannels(
        snapshot.docs.map(doc => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    )
  }, [])

  return (
    <SidebarStyled>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Organization Name</h2>
          <h3>
            <FiberManualRecordIcon />
            Lars Hansen
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>
      <SidebarOptions channels={channels} />
      <SidebarMenu></SidebarMenu>
      <SidebarChannels></SidebarChannels>
    </SidebarStyled>
  )
}

export default Sidebar
