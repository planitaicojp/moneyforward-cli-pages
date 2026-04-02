# invoice

Money Forward クラウド請求書 API のコマンド群。

## グローバルフラグ

| フラグ | デフォルト | 説明 |
|--------|----------|------|
| `--format` | `table` | 出力フォーマット: `table`, `json`, `yaml`, `csv` |
| `--profile` | `default` | プロファイル名 |
| `--verbose` | `false` | 詳細出力 |

## invoice office show

事業所情報を表示します。

```
mf invoice office show
```

## invoice partners

### partners list

取引先一覧を取得します。

```
mf invoice partners list [flags]
```

| フラグ | デフォルト | 説明 |
|--------|----------|------|
| `--page` | `1` | ページ番号 |
| `--all` | `false` | 全ページ取得 |
| `--keyword` | | 検索キーワード |

### partners show

取引先の詳細を表示します。

```
mf invoice partners show <id>
```

## invoice items

### items list

品目一覧を取得します。

```
mf invoice items list [flags]
```

| フラグ | デフォルト | 説明 |
|--------|----------|------|
| `--page` | `1` | ページ番号 |
| `--all` | `false` | 全ページ取得 |

### items show

```
mf invoice items show <id>
```

### items create

```
mf invoice items create [flags]
```

| フラグ | デフォルト | 説明 |
|--------|----------|------|
| `--name` | (必須) | 品目名 |
| `--unit-price` | `0` | 単価 |
| `--quantity` | `1` | 数量 |
| `--detail` | | 説明 |

### items update

```
mf invoice items update <id> [flags]
```

### items delete

```
mf invoice items delete <id>
```

## invoice billings

### billings list

```
mf invoice billings list [flags]
```

| フラグ | デフォルト | 説明 |
|--------|----------|------|
| `--page` | `1` | ページ番号 |
| `--all` | `false` | 全ページ取得 |

### billings show

```
mf invoice billings show <id>
```

## invoice quotes

### quotes list

```
mf invoice quotes list [flags]
```

| フラグ | デフォルト | 説明 |
|--------|----------|------|
| `--page` | `1` | ページ番号 |
| `--all` | `false` | 全ページ取得 |

### quotes show

```
mf invoice quotes show <id>
```

## invoice sent-histories

### sent-histories list

```
mf invoice sent-histories list [flags]
```

| フラグ | デフォルト | 説明 |
|--------|----------|------|
| `--billing-id` | (必須) | 請求書 ID |
| `--page` | `1` | ページ番号 |
| `--all` | `false` | 全ページ取得 |
