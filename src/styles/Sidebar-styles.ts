import styled from "styled-components/macro"

export const Sidebar = styled.div`
  background-color: ${p => p.theme.slackColor};
  border-top: 1px solid ${p => p.theme.slackColorBorder};
  max-width: 260px;
  color: white;
  & > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid ${p => p.theme.slackColorBorder};
  }
`

export const SidebarHeader = styled.div`
  border-bottom: 1px solid ${p => p.theme.slackColorBorder};
  padding: 13px;
  display: flex;
  & > .MuiSvgIcon-root {
    padding: 8px;
    color: ${p => p.theme.slackColorBorder};
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
  }
`
export const SidebarInfo = styled.div`
  flex: 1;
  h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }
  h3 {
    display: flex;
    align-items: center;
    font-size: 13px;
    font-weight: 400px;
    & > .MuiSvgIcon-root {
      color: green;
      font-size: 14px;
      margin-top: 1px;
      margin-right: 2px;
    }
  }
`
export const SidebarMenu = styled.div``
export const SidebarChannels = styled.div``

interface ISidebarOptionStyled {
  readonly isChannel: boolean
}
export const SidebarOptionStyled = styled.div<ISidebarOptionStyled>`
  display: flex;
  align-items: center;
  font-size: 12px;
  padding-left: 2px;
  cursor: pointer;
  & > .MuiSvgIcon-root {
    font-size: 15px;
    padding: 10px;
  }
  :hover {
    opacity: 0.9;
    background-color: ${p => p.theme.slackColorDark};
  }
  span {
    padding: 6px 15px;
    display: inline-flex;
  }
  h3 {
    font-weight: 500;
  }
`
