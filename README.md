# Startify3

Startify3はウェブサイトを作成するために必要なリソースがひととおり揃った静的コーディングの開発環境です。デザインから静的コーディングまでシンプルなウェブページから、JavaScriptのライブラリであるReactを使ったウェブアプリケーションもワンストップで、バンドルツールのwebpackを使って効率よく作成できます。



## Features

Startify3で主に出来ることは以下になります。

* Sketch、Adobe XD、Figmaに対応したデザインガイドライン付きページデザインテンプレート
* webpackを使ったファイル編集の自動検知
* Pugを使ったHTMLマークアップと自動整形および外部データ読み込み
* Sass（SCSS記法・SASS記法）のコンパイル
* StyleLintでのCSSバリデーションチェック
* ESLintでのTypeScriptおよびJavaScript（ECMAScript）バリデーションチェック
* デザインテンプレートのフォーマットに合わせたSass変数およびmixinの使用
* Autoprefixerを使ったベンダープレフィックスの自動付与
* Babelを使ったJavaScript（ECMAScript）のトランスパイル
* webpackを使ったTypeScriptのコンパイル（本番環境用・開発環境用）
* Reactライブラリの使用（ECMAScript・TypeScript）
* ソースコードのマッピングファイルの生成
* CSS、JavaScriptファイルの自動minify化
* 開発用ローカルサーバーの起動とBrowsersyncでの自動リロード
* 各種画像ファイル（jpg、png、gif、svg）の圧縮



## Requirement

Sketch >= 52.4

Adobe XD >= 27.2.12.4

Node.js >= 12.18.3

npm >= 6.14.6

npx >= 6.14.6



## Installation

### Node.js環境のインストール（macOS）

#### 1. Homebrewのインストール
```bash
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
#### 2. nodebrewのインストール・セットアップ
```bash
$ brew install nodebrew
$ nodebrew setup
$ echo 'export PATH=$HOME/.nodebrew/current/bin:$PATH' >> ~/.bash_profile
$ source ~/.bash_profile
```
#### 3. Node.jsのインストール
```bash
$ nodebrew install-binary stable
```
#### 4. 各種パッケージのインストール
プロジェクトディレクトリにフォルダー内のファイル一式を入れて、package.jsonがあるディレクトリまで移動し、必要なパッケージをインストールします。
```bash
$ npm install
```



## Usage

### 各種コマンド

#### 1. 開発環境用ファイル編集の監視
```bash
$ npm run dev
```



## Note

* Sassファイルの変数はSketch、Adobe XD、Figmaの各テンプレートのデザインガイドに合わせています。
* Sassのファイルおよびディレクトリの構成はFLOCSSに基づいて設計しています。
* プロジェクト内で使用しているclass名はBEMの命名規則を緩やかに沿った設計になっています。
* タイトル、ディスクリプション、OGPなどページ固有のmeta要素はPugのソースファイルのデータ変数用スクリプトファイルで指定できます。
* 初期設定ではJavaScript（ECMAScript）およびTypeScriptのコンパイル出力先が同じになりますので上書きにご注意ください。
* 初期設定ではSassのSCSS記法およびSASS記法のCSSファイル出力先が同じになりますので上書きにご注意ください。
* 初期設定では〜IE11などのレガシーブラウザではページ表示時にアラートで警告が出るようになっています。
* 初期設定では開発用ローカルサーバーのポート番号は2000となっています。



## Author

Ogawa Shinya

info@designsupply-web.com



## License

Startify is under [MIT license](https://en.wikipedia.org/wiki/MIT_License). # startify3