import React, { useState } from "react"
import { LoginContainer, InnerContainer } from "./Login-styles"
import SlackSVG from "./SlackSVG"
import { auth, provider } from "../firebase"
import useAppContext from "../State/StateProvider"
import { LoginErrorMessage, LoginButton } from "./Login-styles"

function Login(): JSX.Element {
  const { dispatch } = useAppContext()
  const [message, setMessage] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)

  const loginWithGoogle = (): void => {
    if (dispatch) {
      setMessage("")
      setLoading(true)
      auth
        .signInWithPopup(provider)
        .then(result => {
          if (result.user) {
            const { displayName, photoURL, email } = result?.user
            dispatch({
              type: "SET_USER",
              user: displayName,
              photoURL,
              email,
            })
          }
          setLoading(false)
        })
        .catch(e => {
          if (e) {
            setLoading(false)
            setMessage(e.message)
          }
        })
    }
  }

  return (
    <LoginContainer>
      <InnerContainer>
        <SlackSVG />
        <h1>Slack clone login page</h1>
        <LoginErrorMessage>{message}</LoginErrorMessage>
        <LoginButton onClick={loginWithGoogle}>
          {loading ? "Loading" : "Sign in with Google"}
        </LoginButton>
      </InnerContainer>
    </LoginContainer>
  )
}

export default Login
