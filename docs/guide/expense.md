# 経費精算

Money Forward クラウド経費 API をコマンドラインから操作します。

## 事前準備

```bash
mf auth login --service expense
```

## 事業所 ID

経費 API のすべてのコマンドは事業所 ID が必要です。以下の優先順位で自動解決されます:

1. `--office-id` フラグ（明示指定）
2. プロファイル設定 (`mf config set expense.office_id <id>`)
3. 自動検出（事業所が1つだけの場合）

```bash
# 事業所一覧を確認
mf expense offices list
```
```
ID                    NAME                 TYPE
off1a2b3c4d5e6f7g8   株式会社サンプル       法人
```

```bash
# 事業所 ID を設定しておくと毎回指定不要
mf config set expense.office_id off1a2b3c4d5e6f7g8
```

## マスタデータ

```bash
# 部門
mf expense departments list
mf expense departments show <id>

# プロジェクト
mf expense projects list
mf expense projects list --keyword "開発"

# 経費科目
mf expense categories list

# 税区分
mf expense taxes list

# 役職
mf expense positions list
```

## メンバー

```bash
# 従業員一覧
mf expense members list

# アクティブなメンバーのみ
mf expense members list --only-active

# メンバー詳細
mf expense members show <id>

# 自分の情報
mf expense members me
```
```
ID:                  m1a2b3c4d5e6f7g8
Name:                山田太郎
Number:              EMP001
Active:              true
Administrator:       false
```

## 経費明細

### 一覧・詳細

```bash
# 自分の経費明細
mf expense transactions list

# 組織全体（管理者権限が必要）
mf expense transactions list --scope org

# 全件取得
mf expense transactions list --all

# 詳細
mf expense transactions show <id>
```

### 作成

```bash
mf expense transactions create \
  --remark "タクシー代" \
  --date 2026-04-01 \
  --value 1500 \
  --ex-item-id <経費科目ID>
```
```
ID:            tx1a2b3c4d5e6f7g8
Remark:        タクシー代
Date:          2026-04-01
Value:         1500
```

オプションフラグ:
```bash
mf expense transactions create \
  --remark "出張交通費" \
  --date 2026-04-01 \
  --value 25000 \
  --ex-item-id <経費科目ID> \
  --dept-id <部門ID> \
  --project-id <プロジェクトID> \
  --memo "東京→大阪 新幹線"
```

### 更新

```bash
mf expense transactions update <id> --remark "更新: タクシー代" --value 2000
```

`--scope org` で組織全体の経費明細も更新可能（管理者権限が必要）:

```bash
mf expense transactions update <id> --scope org --memo "管理者による修正"
```

### 削除

```bash
mf expense transactions delete <id>

# 組織全体（管理者）
mf expense transactions delete <id> --scope org
```
