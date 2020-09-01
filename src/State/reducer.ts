import { TAction, IState } from "./types"

const reducer = (state: IState, action: TAction): IState => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user || "",
        photoURL: action.photoURL || "",
        email: action.email || "",
      }
    default:
      return state
  }
}

export default reducer
