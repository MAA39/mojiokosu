# Mojiokosu (Chrome/Edge Extension)

> 話すだけで、いま開いている入力欄に文字が入る。  
> ライブ文字起こし → 区切りで自動挿入。保存しない＝"持たない"設計。  
> *挿入直前だけ* 端末内 **Gemini Nano（Prompt API）**で軽く整える（対応端末のみ）。

## 🎯 目的
- Voice In 風の操作感で、**リアルタイム文字起こし→自動コミット**を最小実装
- **外部送信ゼロ／履歴保存なし**（必要時はクリップボード一時退避だけ）
- 端末が対応していれば、**挿入直前にだけ**ローカルLLMで文を「整える」

## 🚀 主要機能（MVP）
- ライブ文字起こし（`continuous + interimResults`）
- **区切り**：無音 **2.0s** or **120文字**で自動コミット
- **挿入**：キャレット位置へ Direct Insert（失敗時は Paste Mode）
- **フォーカスなし**：最新テキストを **クリップボードに上書き**（トースト通知）
- 薄いオーバーレイ（キャレット追従／interim=薄灰、final=黒）
- Dictation Box（バックアップ入力欄）：Copy/Clear、句読点ON/OFFトグル
- 「**整える（β）**」：Prompt API/Gemini Nano 対応端末のみに表示（未対応は非表示）

## 💻 動作環境
- デスクトップ **Chrome / Edge**（Windows/macOS）

## 🔒 セキュリティ / プライバシー
- **拡張からの外部送信：なし**（テレメトリ・ログ含む）
- 既定で**保存しない**（履歴は持たない）
- 文字起こしは**ブラウザ機能**（環境によりクラウド処理になる場合があります）
- クリップボードは**最新のみ**上書き（読み取りは行いません）

## ⌨️ キーバインド
- 既定：`Alt+L`（Windows） / `⌥L`（Mac） → Start/Stop
- 変更：`chrome://extensions/shortcuts` から変更可能

## 📦 インストール（開発）
1. `npm i` / `npm run build`
2. Chrome の「拡張機能」→「デベロッパーモード」→「パッケージ化されていない拡張機能を読み込む」
3. `mojiokosu/extension/dist` を選択

## 🔧 設定（Options）
- 言語（既定：**ja-JP**、ポップ or 設定から切替）
- Dictation Box ON/OFF
- 注意バナーの表示切替（「音声認識はブラウザ機能です … 」）
- サイト別の挿入モード記憶（Direct / Paste）

## 🛡️ 権限（最小）
- `activeTab`：ユーザー操作時に**今のタブだけ**アクセス
- `scripting`：その場でコンテンツスクリプトを注入
- `storage`：言語やモード等の設定保存
- `clipboardWrite`：Paste Mode や Copy に使用

> 常駐の `host_permissions` は使いません。`debugger` も使いません。

## ✅ QAターゲット
- Gmail / ChatGPT / Googleフォーム / YouTubeコメント

## 🗺️ ロードマップ
- ユーザー辞書（置換表）→ 整える前にローカル適用
- サイト別プリセット（Gmail 等の互換設定）
- iOS/Android ネイティブ連携（将来）

---

**Mojiokosu = 文字起こす**  
"持たない" Chrome拡張で、安全なリアルタイム音声入力を実現。
