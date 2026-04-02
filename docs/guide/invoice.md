# 請求書

Money Forward クラウド請求書 API をコマンドラインから操作します。

## 事前準備

```bash
mf auth login --service invoice
```

## 事業所

```bash
mf invoice office show
```
```
ID:    a1b2c3d4
Name:  株式会社サンプル
```

## 取引先

```bash
# 一覧
mf invoice partners list
```
```
ID                    NAME              CODE
p1a2b3c4d5e6f7g8     株式会社テスト      TEST001
p2b3c4d5e6f7g8h9     有限会社サンプル    SAMPLE01
```

```bash
# 全件取得
mf invoice partners list --all

# 詳細
mf invoice partners show p1a2b3c4d5e6f7g8

# キーワード検索
mf invoice partners list --keyword テスト
```

## 品目

```bash
# 一覧
mf invoice items list

# 詳細
mf invoice items show <id>

# 作成
mf invoice items create --name "新品目" --unit-price 50000

# 更新
mf invoice items update <id> --name "更新品目"

# 削除
mf invoice items delete <id>
```

## 請求書

```bash
# 一覧
mf invoice billings list

# 全件取得（ページネーション自動処理）
mf invoice billings list --all

# 詳細
mf invoice billings show <id>

# JSON 出力
mf invoice billings list --format json
```

## 見積書

```bash
# 一覧
mf invoice quotes list

# 詳細
mf invoice quotes show <id>
```

## 送付履歴

```bash
mf invoice sent-histories list --billing-id <id>
```

## ページネーション

リスト系コマンドは `--page` と `--all` をサポートしています。

```bash
# 特定ページ
mf invoice items list --page 2

# 全ページ自動取得
mf invoice items list --all
```
