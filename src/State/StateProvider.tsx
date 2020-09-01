import React, { createContext, useReducer } from "react"
import reducer from "./reducer"
import initialState from "./initialState"
import { IChildren } from "../types"
import { IState } from "./types"

/* 
  Reducer is a pure function that always
    1. takes in state and action
    2. returns current state. 
*/

export const AppContext = createContext<{ state: IState; dispatch?: React.Dispatch<any> }>({
  state: initialState,
})

export const AppProvider = ({ children }: IChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
}
