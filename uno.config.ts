import { defineConfig, presetAttributify, presetMini, presetUno } from 'unocss'
import { presetTypography } from 'unocss'
import presetColors from "./src/lib/design/colorPreset"

export default defineConfig({
    presets: [
        presetAttributify(), // required when using attributify mode
        presetUno({
            dark: {
                dark: ".dark-theme"
            }
        }), // required
       
        presetTypography(),
        presetColors(),
    ]
})