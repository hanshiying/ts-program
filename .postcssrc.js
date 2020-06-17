module.exports = {
    plugins: {
        "postcss-css-variables": {
            preserve: true,
            // preserveInjectedVariables: false,
            variables: require('./public/var.config.json')
        },
        "autoprefixer": {}
    }
}