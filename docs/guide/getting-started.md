# はじめに

Money Forward CLI (`mf`) は、Money Forward クラウドの各種 API をコマンドラインから操作するツールです。

## インストール

### Go install

```bash
go install github.com/planitaicojp/moneyforward-cli@latest
```

### バージョン確認

```bash
mf version
```
```
mf version 0.2.0
```

## 初回セットアップ

### 1. 認証

Money Forward クラウドの API を利用するには、OAuth2 認証が必要です。

```bash
mf auth login --service invoice
```
```
Opening browser for authentication...
✓ Logged in successfully (profile: default)
```

対応サービス:
- `invoice` — クラウド請求書
- `expense` — クラウド経費

### 2. 認証状態の確認

```bash
mf auth status
```
```
Profile:  default
Service:  invoice
Status:   authenticated
Expires:  2026-04-02 18:00:00
```

### 3. 最初のコマンド

```bash
mf invoice office show
```
```
ID:    a1b2c3d4
Name:  株式会社サンプル
```

## プロファイル

複数のアカウントやサービスを切り替えるには、プロファイルを使います。

```bash
# 別のプロファイルで認証
mf auth login --service expense --profile expense-prod

# プロファイルを指定して実行
mf expense offices list --profile expense-prod

# プロファイル一覧
mf auth list
```
```
PROFILE        SERVICE   STATUS
default        invoice   authenticated
expense-prod   expense   authenticated
```

## 出力フォーマット

すべてのコマンドで `--format` フラグが使えます。

```bash
mf invoice items list --format json
mf invoice items list --format yaml
mf invoice items list --format csv
mf invoice items list --format table   # デフォルト
```

## 次のステップ

- [認証の詳細](/guide/auth) — OAuth2 PKCE フロー、トークン管理
- [請求書ガイド](/guide/invoice) — 請求書 API の使い方
- [経費精算ガイド](/guide/expense) — 経費 API の使い方
