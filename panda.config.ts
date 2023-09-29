import { defineConfig } from "@pandacss/dev"

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  presets: ['@pandacss/dev/presets', '@park-ui/presets'],

  jsxFramework: 'react',

  // Where to look for your css declarations
  include: ["./src/app/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  globalCss: {
    'html, body': {
      margin: 0,
      padding: 0,
      width: '100vw',
      height: '100vh',
    }
  },

  // Useful for theme customization
  theme: {
    extend: {
      semanticTokens: {
        radii: {
          l1: { value: '{radii.sm}' },
          l2: { value: '{radii.md}' },
          l3: { value: '{radii.lg}' },
        },
      },
    }
  },

  // The output directory for your css system
  outdir: "src/styled-system",
})