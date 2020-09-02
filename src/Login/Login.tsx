import React, { useContext, useState, useEffect } from "react"
import { LoginContainer, InnerContainer } from "./Login-styles"
import SlackSVG from "./SlackSVG"
import { auth, provider } from "../firebase"
import AppContext from "../State/StateProvider"
import { LoginErrorMessage, LoginButton } from "./Login-styles"

function Login(): JSX.Element {
  const { dispatch } = useContext(AppContext)
  const [message, setMessage] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    let timeout = 0
    if (message) timeout = setTimeout(() => setMessage(""), 5000)
    return (): void => {
      clearTimeout(timeout)
    }
  }, [message, setMessage])

  const loginWithGoogle = (): void => {
    if (dispatch) {
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
