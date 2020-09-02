import { TAction, IState } from "./types"

enum actionTypes {
  SET_USER = "SET_USER",
}

const reducer = (state: IState, action: TAction): IState => {
  switch (action.type) {
    case actionTypes.SET_USER:
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
