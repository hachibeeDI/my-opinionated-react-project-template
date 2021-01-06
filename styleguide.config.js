const path = require('path');
const reactDocgenTypeScript = require('react-docgen-typescript');

const webpackConf = require('./webpack.config.js');

const originalConf = webpackConf({}, {mode: 'development'});

const confToLoadC3 = {
  module: {
    rules: [
      ...originalConf.module.rules,
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};

const createComponentPatterns = (atomicType) => [`src/components/${atomicType}/*.ts?`, `src/components/${atomicType}/**/index.ts?`];

module.exports = {
  webpackConfig: {...originalConf, ...confToLoadC3},
  propsParser: reactDocgenTypeScript.withCustomConfig('./tsconfig.json').parse,
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/theme/provider.tsx'),
  },

  sections: [
    {
      name: 'Introduction',
      // content: 'src/components/Readme.md',
    },
    {
      name: 'Documentation',
      sections: [
        {
          name: 'UI Components - Atoms',
          content: 'src/components/atoms/introduction.md',
          components: createComponentPatterns('atoms'),
          // exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
          // usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
        },
        // 他の粒度のコンポーネントをサポートする際の例
        // {
        //   name: 'UI Components - Molecules',
        //   content: 'src/components/molecules/introduction.md',
        //   components: createComponentPatterns('molecules'),
        //   // exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
        //   // usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
        // },
        // {
        //   name: 'UI Components - Organisms',
        //   content: 'src/components/organisms/introduction.md',
        //   components: createComponentPatterns('organisms'),
        //   // exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
        //   // usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
        // },
      ],
    },
  ],
};
