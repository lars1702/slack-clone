import React, { useContext } from "react"
import { LoginContainer, InnerContainer } from "./Login-styles"
import SlackSVG from "./SlackSVG"
import { Button } from "@material-ui/core"
import { auth, provider } from "../firebase"
import AppContext from "../State/StateProvider"

function Login() {
  const { dispatch } = useContext(AppContext)
  const loginWithGoogle = () => {
    auth
      .signInWithPopup(provider)
      .then(result => {
        if (dispatch && result.user) {
          const { displayName, photoURL, email } = result?.user
          dispatch({
            type: "SET_USER",
            user: displayName,
            photoURL,
            email,
          })
        }
      })
      .catch(e => {
        alert("could not log in " + e.message)
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
