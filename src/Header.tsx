import React from "react"
import {
  Header as HeaderStyled,
  HeaderLeft,
  HeaderSearch,
  HeaderRight,
  AvatarStyled,
} from "./styles/Header-styles"
import AccessTimeIcon from "@material-ui/icons/AccessTime"
import SearchIcon from "@material-ui/icons/Search"
import HelpOutline from "@material-ui/icons/HelpOutline"

interface IUser {
  displayName?: string
  photoURL?: string
}

interface IHeader {
  user?: IUser
}

const Header = ({ user }: IHeader) => {
  return (
    <HeaderStyled>
      <HeaderLeft>
        <AvatarStyled
          alt={user?.displayName || "Avatar image"}
          src={user?.photoURL || ""}
        />
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
