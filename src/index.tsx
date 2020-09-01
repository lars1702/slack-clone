import App from "./App"
import React from "react"
import ReactDOM from "react-dom"
import Theme from "./styles/Theme"
import * as serviceWorker from "./serviceWorker"
import GlobalStyles from "./styles/global-styles"
import { AppProvider } from "./State/StateProvider"

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Theme>
      <AppProvider>
        <App />
      </AppProvider>
    </Theme>
  </React.StrictMode>,
  document.getElementById("root")
)

serviceWorker.unregister()
