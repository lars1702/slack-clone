import React from "react"
import Header from "./Header"
import { AppBody, AppContainer } from "./styles/App-styles"
import Sidebar from "./Sidebar/Sidebar"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Chat from "./Chat/Chat"
import Login from "./Login/Login"

function App(): JSX.Element {
  const dummyUser = "DUMMYUSER"

  return (
    <AppContainer>
      <Router>
        {!dummyUser ? (
          <Login />
        ) : (
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
              </Switch>
            </AppBody>
          </>
        )}
      </Router>
    </AppContainer>
  )
}

export default App
