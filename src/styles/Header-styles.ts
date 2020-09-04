import styled from "styled-components/macro"
import { Avatar } from "@material-ui/core"

export const AvatarStyled = styled(Avatar)``

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: ${p => p.theme.slackColor};
  color: white;
`

export const HeaderLeft = styled.div`
  flex: 0.3;
  margin-left: 20px;
  display: flex;
  align-items: center;
  & > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`
export const HeaderSearch = styled.div`
  flex: 0.4;
  background: ${p => p.theme.slackColorLight};
  text-align: center;
  display: flex;
  padding: 0 50px;
  color: gray;
  border: 1px solid gray;
  border-radius: 6px;
  input {
    background-color: transparent;
    border: none;
    min-width: 35vw;
    color: white;
    :focus {
      outline: none;
    }
  }
  .MuiSvgIcon-root {
    margin-right: 10px;
  }
`
export const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;
  & > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`
