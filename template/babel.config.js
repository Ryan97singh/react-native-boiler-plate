/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.json'],
        alias: {
          '^@/(.+)': './src/\\1',
          types: './@types',
        },
      },
      ],
     ["@babel/plugin-transform-private-methods", { "loose": true }],
    'inline-dotenv',
    // 'react-native-reanimated/plugin', // needs to be last
  ],
};
