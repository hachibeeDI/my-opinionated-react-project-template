# Proj

## 各部の説明

### i18n対応

i18nextというモジュールを使います。  
この章は公式ドキュメントには目を通してあるという前提で記述します。

i18n対応において非常に重要な機能として、ソースコードをパースして利用箇所から定義を抽出するという機能があります。古のgettextなんかが兼ね備えていたアレですね。  
最近のi18n系ライブラリでこれをちゃんと兼ね備えている機能ライブラリは少ないのですが、JavaScriptは仕様がしっかりしていることとbabelのおかげかこの辺は比較的充実している印象です。

#### ファイルの配置

翻訳定義はJSONファイルとして `src/locales/${locale}/${fileName}.json` というように配置されます。  
`fileName` がnamespaceとして動作します。これは抽出の際も同様に動作します。実際に試してみましょう。

```sh
$ tree src/locales/
src/locales/
├── en
│   └── commons.json
└── ja
    └── commons.json

2 directories, 4 files
```


#### 定義の抽出

現在、翻訳リソースにはcommonsの定義しかない状態です。  
pages以下にnamespaceを切ったReactComponentを用意しておきました。

```sh
$ cat src/pages/pageA.tsx
import React from 'react';
import {useTranslation} from 'react-i18next';

export default function PageA(props: unknown) {
  const {t} = useTranslation('page-a');
  return (
    <section>
      <h3>{t('title-for-page-a')}</h3>
    </section>
  );
}
```

`useTranslation('page-a');` の部分で `page-a.json` の `"title-for-page-a"` に定義されている情報を呼び出していますが、もちろんそんなものはまだ用意してありません。  
とはいえこの先プロジェクトがすすみ、大量の翻訳リソースを手動で用意するのはおろかです。タイポの危険性もあります。生成しましょう。

```sh
$ yarn i18n-extract
## 中身は$ babel --config-file ./.babelrc.i18next-extraction 'src/**/*.{ts,tsx}'

$ tree src/locales/
src/locales/
├── en
│   ├── commons.json
│   └── page-a.json
└── ja
    ├── commons.json
    └── page-a.json

2 directories, 4 files

$ cat src/locales/en/page-a.json
{
  "title-for-page-a": ""
}
```

はい。ちゃんと自動で追加されていますね。  
中国語など、他の言語にも対応したい場合には `.babelrc.i18next-extraction` とかの中身を適宜修正しましょう。


#### 新規リソースの呼び出し

新しくファイルを追加したら、 `src/i18n.ts` で読み込む必要があります。  
`commonEn` とかその辺を参考にやりましょう。


#### 非同期読み込み

アプリの規模と同時にJSONが肥大化してしまうと初期ロードが遅くなる可能性があるので非同期でいい感じにやりたいです。  
Backendというシステムがあるのでそれを利用します。

https://www.i18next.com/overview/plugins-and-utils#backends

現在CodeSplittingによる読み込みは対応していなさそうです。  
また、httpなどのバックエンドのサポートの都合上タイプセーフな実装も公式ではありません。気になる場合はいい感じにやっていく必要があります。


### GraphQLのサポート



### React Component Catalog

Organisms以下の粒度のcomponentは、以下で述べるStyle guideで動作が確認できるようになっていることが望ましいです。

Style guide serverの立ち上げは

```sh
$ yarn styleguide:server
run webpack as development
ℹ ｢wds｣: Project is running at http://localhost:6060/
...
```

で行えます。

当プロジェクトではStorybookではなくStyleguidistを利用しています。

詳細は公式ドキュメントで確認のこと。 https://react-styleguidist.js.org

