import { OverridableComponent } from "@material-ui/core/OverridableComponent"
import { SvgIconTypeMap } from "@material-ui/core"

export type MuiSVGIcon = OverridableComponent<SvgIconTypeMap<{}, "svg">>

export interface IChannel {
  name: string
  id: string
}
export type ChannelsType = IChannel[]
