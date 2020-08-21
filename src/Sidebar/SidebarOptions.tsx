import React from "react"
import { ChannelsType } from "../types"
import SidebarOption from "./SidebarOption"

//Icon imports
import AppsIcon from "@material-ui/icons/Apps"
import InboxIcon from "@material-ui/icons/Inbox"
import AddIcon from "@material-ui/icons/Add"
import DraftsIcon from "@material-ui/icons/Drafts"
import FileCopyIcon from "@material-ui/icons/FileCopy"
import PeopleAltIcon from "@material-ui/icons/PeopleAlt"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import ExpandLessIcon from "@material-ui/icons/ExpandLess"
import InsertCommentIcon from "@material-ui/icons/InsertComment"
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder"

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
    <SidebarOption title="Add Channel" isAddChannelOption SidebarOptionIcon={AddIcon} />
    {channels.map((channel, i) => (
      <SidebarOption key={channel?.name} title={channel?.name || ""} id={channel?.id} />
    ))}
  </>
)

export default SidebarOptions
