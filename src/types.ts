import { OverridableComponent } from "@material-ui/core/OverridableComponent"
import { SvgIconTypeMap } from "@material-ui/core"
import { firestore as firestoreTypes } from "firebase/app"

export type MuiSVGIcon = OverridableComponent<SvgIconTypeMap<{}, "svg">>

export interface IChannel {
  name?: string
  id?: string
}

export interface IChildren {
  children: JSX.Element
}

export type UserType = {
  name: string
  image: string
}

interface ITimestamp {
  nanoseconds: number
  seconds: number
}
export interface IMessage {
  user?: string
  userImage?: string
  message?: string
  timestamp?: ITimestamp
}

export type DocumentSnapshot = firestoreTypes.DocumentSnapshot

export type ChannelsType = IChannel[]

export type DocumentData = firestoreTypes.DocumentData
