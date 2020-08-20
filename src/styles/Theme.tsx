import { ThemeProvider } from "styled-components"
import React from "react"

const theme = {
  slackColorDark: "#340e36",
  slackColor: "#3f0f40",
  slackColorLight: "#421f44",
  slackColorBorder: "#49274b",
}

const Theme = ({ children }: { children: JSX.Element }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Theme
