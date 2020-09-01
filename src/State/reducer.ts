import { TAction, IState } from "./types"

const reducer = (state: IState, action: TAction): IState => {
  console.log("DEBUG - action, state:", action, state)
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: "testuser",
      }
    default:
      return state
  }
}

export default reducer
