import React, { createContext, useReducer } from "react"
import reducer from "./reducer"
import initialState from "./initialState"
import { IChildren } from "../types"
import { IState } from "./types"

const AppContext = createContext<{ state: IState; dispatch?: React.Dispatch<any> }>({
  state: initialState,
})

export const AppProvider = ({ children }: IChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
}

export default AppContext
