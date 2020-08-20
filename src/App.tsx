import React from "react"
import Header from "./Header"
import { Body } from "./styles/App-styles"
import Sidebar from "./Sidebar/Sidebar"
function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <Body>
        <Sidebar />
      </Body>
      {/* React-router --> for specific channels */}
    </div>
  )
}

export default App
