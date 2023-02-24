const {
    override,
    addDecoratorsLegacy,
    disableEsLint,
    addWebpackAlias,
    addBabelPlugins,
    addLessLoader,
    addPostcssPlugins,
    adjustStyleLoaders,
    removeModuleScopePlugin,
    useBabelRc
} = require('customize-cra');

const path = require('path');

const ignoreSourceMapWarning = () => config => {
    config.ignoreWarnings = [/Failed to parse source map/];
    return config;
}; 
  
module.exports = override(
    // enable alias
    addWebpackAlias({ 
        _common: path.resolve(process.cwd(), '../_common'),
        "proto_bundle": path.resolve(process.cwd(), '../proto_bundle'),
        '@': path.resolve(process.cwd(), 'src'),
    }),
    // 使用自定义babel
    useBabelRc(),

    ignoreSourceMapWarning(),

    removeModuleScopePlugin(),
); 