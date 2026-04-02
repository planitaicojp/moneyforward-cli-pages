# auth

Money Forward クラウドの認証を管理するコマンド群。

## auth login

OAuth2 PKCE フローでログインします。

```
mf auth login [flags]
```

| フラグ | デフォルト | 説明 |
|--------|----------|------|
| `--service` | (必須) | サービス名: `invoice`, `expense` |
| `--profile` | `default` | プロファイル名 |
| `--port` | `12345` | コールバック用ローカルポート |

### 例

```bash
mf auth login --service invoice
mf auth login --service expense --profile my-expense
```

## auth logout

現在のプロファイルからログアウトします。

```
mf auth logout [flags]
```

| フラグ | デフォルト | 説明 |
|--------|----------|------|
| `--profile` | `default` | プロファイル名 |

## auth status

認証状態を表示します。

```
mf auth status [flags]
```

| フラグ | デフォルト | 説明 |
|--------|----------|------|
| `--profile` | `default` | プロファイル名 |

### 例

```bash
mf auth status
```
```
Profile:  default
Service:  invoice
Status:   authenticated
Expires:  2026-04-02 18:00:00
```

## auth list

すべてのプロファイルを一覧表示します。

```
mf auth list
```

## auth switch

アクティブプロファイルを切り替えます。

```
mf auth switch <profile>
```

## auth token

現在のアクセストークンを出力します。スクリプトやパイプラインで利用する場合に便利です。

```
mf auth token [flags]
```

## auth remove

指定したプロファイルを削除します。

```
mf auth remove <profile>
```
