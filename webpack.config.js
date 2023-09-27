const path = require('path');

module.exports = [
  {
    entry: './src/VideoGameFaker.ts',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      library: 'lib',
      libraryTarget: 'umd',
      globalObject: 'this',
    }
  },
	{
  entry: './src/VideoGameFaker.ts',
	experiments: {
    outputModule: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
		library: {
			type: "module"
		},
  },
}
];