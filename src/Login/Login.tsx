import React from "react"
import { LoginContainer, InnerContainer } from "./Login-styles"
import SlackSVG from "./SlackSVG"
import { Button } from "@material-ui/core"
import { auth, provider } from "../firebase"

function Login() {
  const loginWithGoogle = () => {
    auth
      .signInWithPopup(provider)
      .then(result => {
        console.log("DEBUG - result:", result.user)
      })
      .catch(e => {
        console.log("DEBUG - e:", e.message)
      })
  }

  return (
    <LoginContainer>
      <InnerContainer>
        <SlackSVG />
        <h1>Slack clone login page</h1>
        <Button onClick={loginWithGoogle}>Sign in with Google</Button>
      </InnerContainer>
    </LoginContainer>
  )
}

export default Login
