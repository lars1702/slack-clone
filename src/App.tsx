import React from "react"
import Header from "./Header"
import { AppBody, AppContainer } from "./styles/App-styles"
import Sidebar from "./Sidebar/Sidebar"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Chat from "./Chat/Chat"

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <AppContainer>
        <Header />
        <AppBody>
          <Sidebar />
          <Switch>
            <Route path="/room/:roomId">
              <Chat />
            </Route>
          </Switch>
        </AppBody>
        {/* React-router --> for specific channels */}
      </AppContainer>
    </BrowserRouter>
  )
}

export default App
