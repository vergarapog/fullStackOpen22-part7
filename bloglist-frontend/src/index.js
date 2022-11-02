import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"

import { Provider } from "react-redux"

import { BrowserRouter as Router } from "react-router-dom"

import store from "./reducers/store"

import { AppProvider } from "./context"

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </AppProvider>
)
