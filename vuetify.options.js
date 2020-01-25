const colors = require('vuetify/es5/util/colors').default

module.exports = {
  customVariables: ['~/assets/variables.scss'],
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: colors.orange.darken3,
        accent: colors.orange.darken2,
        secondary: colors.amber.lighten5,
        info: colors.blueGrey.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3
      },
      light: {
        primary: colors.orange.darken2,
        accent: colors.orange.darken2,
        secondary: colors.amber.lighten5,
        info: colors.blueGrey.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3
      }
    }
  }
}
