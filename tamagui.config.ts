// import { config } from "@tamagui/config/v2"
import { tokens } from "@tamagui/themes/v2"
import { themes } from "@tamagui/themes/v2-themes"
import { shorthands } from "@tamagui/shorthands"
import { createTamagui } from "tamagui"

const tamaguiConfig = createTamagui({
	tokens: tokens,
	themes,
	shorthands,
})
// this makes typescript properly type everything based on the config

type Conf = typeof tamaguiConfig

declare module "tamagui" {
	interface TamaguiCustomConfig extends Conf {}
}
export default tamaguiConfig
// depending on if you chose tamagui, @tamagui/core, or @tamagui/web

// be sure the import and declare module lines both use that same name
