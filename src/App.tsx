import React, { useContext } from "react"
import Header from "./Header"
import { AppBody, AppContainer } from "./styles/App-styles"
import Sidebar from "./Sidebar/Sidebar"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Chat from "./Chat/Chat"
import Login from "./Login/Login"
import AppContext from "./State/StateProvider"

function App(): JSX.Element {
  const { state } = useContext(AppContext)
  return (
    <AppContainer>
      <Router>
        {!state.user ? (
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
