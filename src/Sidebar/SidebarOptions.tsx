import React from "react"
import { SidebarOptionStyled } from "../styles/Sidebar-styles"
import { MuiSVGIcon, ChannelsType } from "../types"
import InsertCommentIcon from "@material-ui/icons/InsertComment"
import InboxIcon from "@material-ui/icons/Inbox"
import DraftsIcon from "@material-ui/icons/Drafts"
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder"
import PeopleAltIcon from "@material-ui/icons/PeopleAlt"
import AppsIcon from "@material-ui/icons/Apps"
import FileCopyIcon from "@material-ui/icons/FileCopy"
import ExpandLessIcon from "@material-ui/icons/ExpandLess"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

interface ISidebarOption {
  SidebarOptionIcon?: MuiSVGIcon
  title: string
  id?: string
}

interface ISidebarOptions {
  channels: ChannelsType
}

const SidebarOptions = ({ channels }: ISidebarOptions) => (
  <>
    <SidebarOption title="Threads" SidebarOptionIcon={InsertCommentIcon} />
    <SidebarOption title="Mentions &amp; reactions" SidebarOptionIcon={InboxIcon} />
    <SidebarOption title="Saved items" SidebarOptionIcon={DraftsIcon} />
    <SidebarOption title="Channel browser" SidebarOptionIcon={BookmarkBorderIcon} />
    <SidebarOption title="People &amp; user groups" SidebarOptionIcon={PeopleAltIcon} />
    <SidebarOption title="Apps" SidebarOptionIcon={AppsIcon} />
    <SidebarOption title="File browser" SidebarOptionIcon={FileCopyIcon} />
    <SidebarOption title="Show less" SidebarOptionIcon={ExpandLessIcon} />
    <hr />
    <SidebarOption title="Show more" SidebarOptionIcon={ExpandMoreIcon} />
    <hr />
    {/* Connect to db */}
    {/* Sidebar options ... */}
    {channels.map(channel => (
      <SidebarOption title={channel.name} id={channel.id} />
    ))}
  </>
)

const SidebarOption = ({ SidebarOptionIcon, title }: ISidebarOption) => {
  const isChannel = !SidebarOptionIcon
  return (
    <SidebarOptionStyled isChannel={isChannel}>
      {SidebarOptionIcon && <SidebarOptionIcon />}
      <h3>
        {isChannel && <span>#</span>}
        {title}
      </h3>
    </SidebarOptionStyled>
  )
}

export default SidebarOptions
