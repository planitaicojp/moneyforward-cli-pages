---
layout: home
hero:
  name: Money Forward CLI
  text: Money Forward クラウドをコマンドラインから操作
  tagline: 請求書・経費精算、すべてターミナルから
  actions:
    - theme: brand
      text: はじめに
      link: /guide/getting-started
    - theme: alt
      text: GitHub
      link: https://github.com/planitaicojp/moneyforward-cli-pages
features:
  - title: OAuth2 認証
    details: PKCE フローでセキュアにログイン。複数プロファイル対応でアカウント切り替えもかんたん。
  - title: 請求書API
    details: 取引先・品目・請求書・見積書の作成・管理をコマンドラインから実行。
  - title: 経費精算API
    details: 経費明細の登録・一覧・更新・削除。--scope org で管理者操作にも対応。
---

## 3ステップで始める

### 1. インストール

```bash
go install github.com/planitaicojp/moneyforward-cli@latest
```

### 2. ログイン

```bash
mf auth login --service invoice
```
```
Opening browser for authentication...
✓ Logged in successfully (profile: default)
```

### 3. データを取得

```bash
mf invoice items list
```
```
ID                    NAME          UNIT PRICE
a1b2c3d4e5f6g7h8     コンサルティング    100000
b2c3d4e5f6g7h8i9     開発費            500000
```

::: tip 詳しくは
[はじめに](/guide/getting-started) でインストールから初回認証まで解説しています。
:::
