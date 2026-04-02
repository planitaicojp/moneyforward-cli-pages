# 認証

Money Forward CLI は OAuth2 PKCE (Proof Key for Code Exchange) フローで認証します。

## 認証の流れ

1. `mf auth login` を実行
2. ブラウザが自動的に開き、Money Forward の認証ページが表示される
3. ログイン・認可後、CLIにリダイレクトされトークンが保存される

```bash
mf auth login --service invoice
```
```
Opening browser for authentication...
Waiting for callback on http://localhost:12345/callback ...
✓ Logged in successfully (profile: default)
```

## サービス

認証時に `--service` でサービスを指定します。

| サービス | 説明 |
|---------|------|
| `invoice` | クラウド請求書 |
| `expense` | クラウド経費 |

```bash
mf auth login --service invoice
mf auth login --service expense
```

## トークン管理

認証トークンはローカルに保存され、期限切れ時に自動でリフレッシュされます。

```bash
# 現在のトークンを表示
mf auth token

# 認証状態を確認
mf auth status
```
```
Profile:  default
Service:  invoice
Status:   authenticated
Expires:  2026-04-02 18:00:00
```

## 複数プロファイル

異なるアカウントやサービスごとにプロファイルを作成できます。

```bash
# 新しいプロファイルで認証
mf auth login --service expense --profile my-expense

# プロファイルを切り替え
mf auth switch my-expense

# プロファイル一覧
mf auth list
```

## ログアウト

```bash
# 現在のプロファイルからログアウト
mf auth logout

# 特定のプロファイルを削除
mf auth remove my-expense
```
