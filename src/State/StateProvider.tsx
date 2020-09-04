import React, { createContext, useReducer, useContext } from "react"
import reducer from "./reducer"
import initialState from "./initialState"
import { IChildren } from "../types"
import { IState } from "./types"

export const AppContext = createContext<{ state: IState; dispatch?: React.Dispatch<any> }>({
  state: initialState,
})

export const AppProvider = ({ children }: IChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
}

const useAppContext = () => useContext(AppContext)

export default useAppContext
