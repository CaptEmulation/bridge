module.exports = ({ file, options, env }) => ({
  plugins: {
    'postcss-flexbugs-fixes': require('postcss-flexbugs-fixes'),
    'postcss-import': { root: file.dirname },
    'autoprefixer': env == 'production' ? options.autoprefixer : false,
    'postcss-initial':   require('postcss-initial')({
      reset: 'inherited' // reset only inherited rules
    }),
    'postcss-mixins': require('postcss-mixins')({
      mixins: require('./config/postcss.mixins')
    }),
    'postcss-nested': require('postcss-mixins')({
      mixins: require('./config/postcss.mixins')
    }),
    'postcss-simple-vars': require('postcss-simple-vars')({
      variables: function variables() {
        return require('./postcss.variables')
      },
      unknown: function unknown(node, name, result) {
        node.warn(result, 'Unknown variable ' + name)
      }
    }),
    'postcss-math': require('postcss-math'),
    'postcss-color-function': require('postcss-color-function'),
  }
});
