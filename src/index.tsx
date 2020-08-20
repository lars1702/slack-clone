import App from "./App"
import React from "react"
import ReactDOM from "react-dom"
import Theme from "./styles/Theme"
import * as serviceWorker from "./serviceWorker"
import GlobalStyles from "./styles/global-styles"

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Theme>
      <App />
    </Theme>
  </React.StrictMode>,
  document.getElementById("root")
)

serviceWorker.unregister()
