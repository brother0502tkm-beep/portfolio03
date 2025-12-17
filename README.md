# Takumi Portfolio - LP制作

本リポジトリは、Web制作の学習成果として制作した **ランディングページ（LP）です。  
HTML / CSS / JavaScript を使用し、スマートフォン / タブレット / PC の各デバイスで最適に表示されるようレスポンシブ対応を実装しています。

---

##  制作概要

- **制作物名**：Web 制作 LP（個人制作）
- **制作期間**：２週間
- **担当範囲**：構成 / デザイン模写 / コーディング / レスポンシブ実装  
- **使用技術**：
  - HTML
  - CSS（Sass / SCSS）
  - JavaScript（jQueryの一部使用）
  + Github Pages にて公開

---

##  公開URL

- **GitHubリポジトリ**：  
  https://github.com/brother0502tkm-beep/takumi_portfolio

---

##  主な実装機能

### ● レスポンシブ対応
- SP / TB / PC の3段階  
- メディアクエリは`@use`したブレークポイント変数で管理  
- PCでは固定ナビ、SPではドロワーメニューを実装

### ● ハンバーガーメニュー（SP）
- jQuery の `slideToggle()` を使用  
- SP時のみ動作し、PC時は常時表示される仕様  
- メニュー展開時には `body.is-fixed` を付与してスクロール固定

### ● アニメーション / UI
- ボタンホバー時の色反転  
- 画像のシャドウ  
- セクション間の余白調整で視認性を向上

---

## 🖥️ 制作物スクリーンショット

### ファーストビュー（FV）
![ファーストビュー](https://github.com/brother0502tkm-beep/portfolio03/blob/main/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202025-12-13%201.51.50.png?raw=true)

**キャッチコピーとビジュアルでサービス内容が直感的に伝わる構成**を意識しました。

---

### コンセプト / サービス概要
![コンセプト](https://github.com/brother0502tkm-beep/portfolio03/blob/main/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202025-12-13%201.52.16.png?raw=true)

サービスの特徴や強みが一目で伝わるよう、  
**情報量と余白のバランス**を意識してレイアウトしました。

---

### 特徴・強み紹介
![特徴](https://github.com/brother0502tkm-beep/portfolio03/blob/main/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202025-12-13%201.52.30.png?raw=true)

複数の特徴を**視認性よくカード型UI**で配置し、  
ユーザーが内容を把握しやすい構成にしました。

---

### 具体的な機能・サービス内容
![サービス内容](https://github.com/brother0502tkm-beep/portfolio03/blob/main/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202025-12-13%201.53.06.png?raw=true)

文章量が多くなりすぎないよう、  
**見出し＋説明文の階層構造**を意識して実装しました。

---

### 実績・事例紹介
![実績](https://github.com/brother0502tkm-beep/portfolio03/blob/main/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202025-12-13%201.53.15.png?raw=true)

実績が視覚的に伝わるよう、  
**画像とテキストの配置バランス**を調整しました。

---

### ご利用の流れ
![利用の流れ](https://github.com/brother0502tkm-beep/portfolio03/blob/main/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202025-12-13%201.53.27.png?raw=true)

ステップ構成を用い、  
**初めてのユーザーでも迷わない導線**を意識しました。

---

### よくある質問（FAQ）
![FAQ](https://github.com/brother0502tkm-beep/portfolio03/blob/main/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202025-12-13%201.53.55.png?raw=true)

ユーザーの不安を事前に解消できるよう、  
**Q&A形式で情報を整理**しました。

---

### お問い合わせ・フッター
![フッター](https://github.com/brother0502tkm-beep/portfolio03/blob/main/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202025-12-13%201.54.09.png?raw=true)

お問い合わせへの導線をページ下部に設置し、  
**CV（行動）につながる構成**にしています。

---

## 🛠️ 使用技術
- HTML
- CSS（Sass / SCSS）
- JavaScript
- レスポンシブ対応

---

## 🎯 制作のポイント
- LP構成を意識したセクション設計
- 再利用しやすいCSS設計
- JavaScriptによるUIの補助的な動き実装

---

