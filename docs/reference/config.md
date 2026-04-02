# config

CLI の設定値を管理するコマンド群。

## config set

設定値を保存します。

```
mf config set <key> <value> [flags]
```

### 主な設定キー

| キー | 説明 | 例 |
|------|------|-----|
| `format` | デフォルト出力フォーマット | `json`, `table`, `yaml`, `csv` |
| `expense.office_id` | 経費 API のデフォルト事業所 ID | `abc123` |

### 例

```bash
mf config set format json
mf config set expense.office_id abc123
```

## config get

設定値を取得します。

```
mf config get <key>
```

### 例

```bash
mf config get format
```
```
json
```

## config list

すべての設定値を一覧表示します。

```
mf config list
```

## config path

設定ディレクトリのパスを表示します。

```
mf config path
```
```
/home/user/.config/mf
```
