import React, { useContext } from "react"
import {
  Header as HeaderStyled,
  HeaderLeft,
  HeaderSearch,
  HeaderRight,
  AvatarStyled as Avatar,
} from "./styles/Header-styles"
import AccessTimeIcon from "@material-ui/icons/AccessTime"
import SearchIcon from "@material-ui/icons/Search"
import HelpOutline from "@material-ui/icons/HelpOutline"
import useAppContext from "./State/StateProvider"

interface IUser {
  displayName?: string
  photoURL?: string
}

const Header = () => {
  const { state } = useAppContext()
  return (
    <HeaderStyled>
      <HeaderLeft>
        <Avatar alt={state.user || "User image"} src={state.photoURL || ""} />
        <AccessTimeIcon />
      </HeaderLeft>
      <HeaderSearch>
        <SearchIcon />
        <input placeholder="Search for channels or messages" />
      </HeaderSearch>
      <HeaderRight>
        <HelpOutline />
      </HeaderRight>
    </HeaderStyled>
  )
}

export default Header
