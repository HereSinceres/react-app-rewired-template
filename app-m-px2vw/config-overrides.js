const {
    override,
    addDecoratorsLegacy,
    disableEsLint,
    addBundleVisualizer,
    addWebpackAlias,
    adjustWorkbox,
} = require('customize-cra');
const path = require('path');
function withPostcssConfig(config) {
    const rules = config.module.rules.find((rule) =>
        Array.isArray(rule.oneOf)
    ).oneOf;
    rules.forEach(
        (r) =>
            r.use &&
            r.use.forEach((u) => {
                if (u.options?.postcssOptions) {
                    console.log(u.options);
                    delete u.options;
                }
            })
    );
    return config;
}
module.exports = override(withPostcssConfig);
