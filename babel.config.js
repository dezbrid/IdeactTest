module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'import-glob',
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.json',
        ],
        alias: {
          '@components': './src/components',
          '@config': './src/config',
          '@constants': './src/constants',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@services': './src/services',
          '@types': './src/types',
        },
      },
    ],
  ],
};
