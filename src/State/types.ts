export type TAction = {
  type: string
  user?: string
  photoURL?: string
  email?: string
}

export interface IState {
  user: string
  photoURL: string
  email: string
}
