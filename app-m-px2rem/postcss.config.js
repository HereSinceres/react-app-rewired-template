const path = require('path');
module.exports = config;
//   {
//     plugins: [
//         [
//             'postcss-px-to-clamp',

//             // {
//             //     viewportWidth: designWidth,
//             //     //     // maxViewportWidth?: string
//             //     //     // minViewportWidth?: string
//             //     //     // viewportUnit: 'vw' | 'vmin'
//             //     //     // fontViewportUnit: 'vw' | 'vmin'
//             //     //     // unitPrecision: number
//             //     //     // selectorBlackList: (string | RegExp)[]
//             //     //     // propBlackList: (string | RegExp)[]
//             //     //     // minPixelValue: number
//             //     //     // mediaQuery: boolean
//             //     //     // keyframesQuery: boolean
//             //     //     // replace: boolean
//             //     //     // include?: RegExp | RegExp[]
//             //     //     // exclude?: RegExp | RegExp[]
//             // },
//         ],
//         'postcss-flexbugs-fixes',
//         [
//             'postcss-preset-env',
//             {
//                 autoprefixer: {
//                     flexbox: 'no-2009',
//                 },
//                 stage: 3,
//             },
//         ],
//         // Adds PostCSS Normalize as the reset css with default options,
//         // so that it honors browserslist config in package.json
//         // which in turn let's users customize the target behavior as per their needs.
//         'postcss-normalize',
//     ],
// };
function config({ file }) {
    let designWidth = 750;
    designWidth = file?.indexOf('node_modules/antd-mobile') > -1 ? 375 : 750;

    return {
        plugins: [
            [
                'postcss-px-to-clamp',
                {
                    viewportWidth: designWidth,
                    //     // maxViewportWidth?: string
                    //     // minViewportWidth?: string
                    //     // viewportUnit: 'vw' | 'vmin'
                    //     // fontViewportUnit: 'vw' | 'vmin'
                    //     // unitPrecision: number
                    //     // selectorBlackList: (string | RegExp)[]
                    //     // propBlackList: (string | RegExp)[]
                    //     // minPixelValue: number
                    //     // mediaQuery: boolean
                    //     // keyframesQuery: boolean
                    //     // replace: boolean
                    //     // include?: RegExp | RegExp[]
                    //     // exclude?: RegExp | RegExp[]
                },
            ],
            'postcss-flexbugs-fixes',
            [
                'postcss-preset-env',
                {
                    autoprefixer: {
                        flexbox: 'no-2009',
                    },
                    stage: 3,
                },
            ],
            // Adds PostCSS Normalize as the reset css with default options,
            // so that it honors browserslist config in package.json
            // which in turn let's users customize the target behavior as per their needs.
            'postcss-normalize',
        ],
    };
}
