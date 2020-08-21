import React from "react"
import { SidebarOptionStyled } from "../styles/Sidebar-styles"
import { MuiSVGIcon } from "../types"
import { useHistory } from "react-router-dom"
import db from "../firebase"

interface ISidebarOption {
  isAddChannelOption?: boolean
  SidebarOptionIcon?: MuiSVGIcon
  title: string
  id?: string
}

const SidebarOption = ({ SidebarOptionIcon, title, isAddChannelOption, id }: ISidebarOption) => {
  const isChannel = !SidebarOptionIcon
  const history = useHistory()
  const selectChannel = () => {
    history.push(id ? `/room/${id}` : title)
  }

  const addChannel = async () => {
    const name = prompt("Please enter the channel name")
    if (name) {
      const docDoesNotExist = await db.collection("rooms").where("name", "==", name).get()
      if (docDoesNotExist.empty) await db.collection("rooms").add({ name })
      else alert(`Channel ${name} already exists`)
    }
  }

  return (
    <SidebarOptionStyled
      onClick={isAddChannelOption ? addChannel : selectChannel}
      isChannel={isChannel}
    >
      {SidebarOptionIcon && <SidebarOptionIcon />}
      <h3>
        {isChannel && <span>#</span>}
        {title}
      </h3>
    </SidebarOptionStyled>
  )
}

export default SidebarOption
