module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ["react-native-reanimated/plugin"],
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          src: './src',
          theme: ['./src/theme'],
          screens: ['./src/Screens'],
          navigation: ['./src/navigation'],
          components: ['./src/Components'],
          // store: './src/redux',
          assets: ['./src/assets'],
        },
      },
    ],
  ],
};