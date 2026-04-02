# expense

Money Forward クラウド経費 API のコマンド群。

## グローバルフラグ

| フラグ | デフォルト | 説明 |
|--------|----------|------|
| `--office-id` | (自動検出) | 事業所 ID |
| `--format` | `table` | 出力フォーマット: `table`, `json`, `yaml`, `csv` |
| `--profile` | `default` | プロファイル名 |
| `--verbose` | `false` | 詳細出力 |

## 事業所 ID の解決

1. `--office-id` フラグ
2. プロファイル設定 (`expense.office_id`)
3. 自動検出（事業所が1つの場合）

## expense offices list

事業所一覧を取得します。

```
mf expense offices list [flags]
```

| フラグ | デフォルト | 説明 |
|--------|----------|------|
| `--page` | `1` | ページ番号 |
| `--all` | `false` | 全ページ取得 |

## expense departments

### departments list

```
mf expense departments list [flags]
```

| フラグ | デフォルト | 説明 |
|--------|----------|------|
| `--page` | `1` | ページ番号 |
| `--all` | `false` | 全ページ取得 |
| `--keyword` | | 検索キーワード (最大50文字) |

### departments show

```
mf expense departments show <id>
```

## expense projects

### projects list

```
mf expense projects list [flags]
```

| フラグ | デフォルト | 説明 |
|--------|----------|------|
| `--page` | `1` | ページ番号 |
| `--all` | `false` | 全ページ取得 |
| `--keyword` | | 検索キーワード |

### projects show

```
mf expense projects show <id>
```

## expense categories

### categories list

経費科目一覧を取得します (API: `ex_items`)。

```
mf expense categories list [flags]
```

| フラグ | デフォルト | 説明 |
|--------|----------|------|
| `--page` | `1` | ページ番号 |
| `--all` | `false` | 全ページ取得 |
| `--keyword` | | 検索キーワード |

### categories show

```
mf expense categories show <id>
```

## expense taxes

### taxes list

税区分一覧を取得します (API: `excises`)。

```
mf expense taxes list [flags]
```

| フラグ | デフォルト | 説明 |
|--------|----------|------|
| `--page` | `1` | ページ番号 |
| `--all` | `false` | 全ページ取得 |

### taxes show

```
mf expense taxes show <id>
```

## expense positions

### positions list

```
mf expense positions list [flags]
```

| フラグ | デフォルト | 説明 |
|--------|----------|------|
| `--page` | `1` | ページ番号 |
| `--all` | `false` | 全ページ取得 |

### positions show

```
mf expense positions show <id>
```

## expense members

### members list

従業員一覧を取得します (v2 API)。

```
mf expense members list [flags]
```

| フラグ | デフォルト | 説明 |
|--------|----------|------|
| `--page` | `1` | ページ番号 |
| `--all` | `false` | 全ページ取得 |
| `--only-active` | `false` | アクティブなメンバーのみ |

### members show

```
mf expense members show <id>
```

### members me

アクセストークン保有者の従業員情報を表示します。

```
mf expense members me
```

## expense transactions

### transactions list

```
mf expense transactions list [flags]
```

| フラグ | デフォルト | 説明 |
|--------|----------|------|
| `--page` | `1` | ページ番号 |
| `--all` | `false` | 全ページ取得 |
| `--scope` | `personal` | スコープ: `personal` または `org` (管理者) |

### transactions show

```
mf expense transactions show <id> [flags]
```

| フラグ | デフォルト | 説明 |
|--------|----------|------|
| `--scope` | `personal` | スコープ: `personal` または `org` |

### transactions create

自分の経費明細を作成します。

```
mf expense transactions create [flags]
```

| フラグ | デフォルト | 説明 |
|--------|----------|------|
| `--remark` | (必須) | 支払先・内容 |
| `--date` | (必須) | 日付 (YYYY-MM-DD) |
| `--value` | (必須) | 金額（税込） |
| `--ex-item-id` | (必須) | 経費科目 ID |
| `--memo` | | メモ |
| `--report-number` | | 事前申請番号 |
| `--dept-id` | | 部門 ID |
| `--project-id` | | プロジェクト ID |
| `--dr-excise-id` | | 借方税区分 ID |
| `--cr-item-id` | | 貸方勘定科目 ID |
| `--cr-sub-item-id` | | 貸方補助科目 ID |
| `--jpyrate` | | 円換算レート |
| `--currency` | | 通貨コード (例: USD) |

### transactions update

```
mf expense transactions update <id> [flags]
```

create と同じフラグ（すべてオプション）。変更したいフィールドのみ指定します。

| フラグ | 説明 |
|--------|------|
| `--scope` | `personal` または `org` (管理者) |

### transactions delete

```
mf expense transactions delete <id> [flags]
```

| フラグ | デフォルト | 説明 |
|--------|----------|------|
| `--scope` | `personal` | スコープ: `personal` または `org` |
