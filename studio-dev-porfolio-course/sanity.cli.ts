import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '559fyoh9',
    dataset: 'production'
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
    autoUpdates: true,
  }
})
