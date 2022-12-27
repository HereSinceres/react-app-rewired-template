const presets = [
    "babel-preset-react-app"
];
const plugins =  [
    [
        "@babel/plugin-proposal-class-properties",
        {
            "loose": false
        }
    ],
    [
        "@babel/plugin-proposal-decorators",
        {
            "legacy": true,
            "loose": false
        }
    ],
    [
        "@babel/plugin-proposal-private-methods",
        {
            "loose": false
        }
    ],
    [
        "@babel/plugin-proposal-private-property-in-object",
        {
            "loose": false
        }
    ]]

// if (process.env["ENV"] === "prod") {
//   plugins.push(...);
// }
 
module.exports = { 
    presets,
    plugins   
}