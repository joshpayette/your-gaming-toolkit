import type { Config } from 'tailwindcss'
import sharedConfig from '@repo/tailwind-config'

const config = {
  content: ['./src/**/*.tsx'],
  prefix: 'ui-',
  presets: [sharedConfig],
} satisfies Config

export default config
