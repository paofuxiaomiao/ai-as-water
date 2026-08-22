#!/usr/bin/env bash
# 验证资料包 Markdown 内本地相对链接是否指向存在的文件。
set -euo pipefail

bundle_dir="$(cd "$(dirname "$0")/../.." && pwd)"
checked=0
failed=0

while IFS= read -r -d '' md_file; do
  md_dir="$(dirname "$md_file")"
  while IFS= read -r link; do
    target="${link%%#*}"
    if [[ -z "$target" || "$target" =~ ^https?:// || "$target" =~ ^mailto: ]]; then
      continue
    fi
    checked=$((checked + 1))
    if [[ ! -e "$md_dir/$target" ]]; then
      printf 'MISSING | %s | %s\n' "${md_file#$bundle_dir/}" "$link"
      failed=$((failed + 1))
    else
      printf 'OK      | %s | %s\n' "${md_file#$bundle_dir/}" "$link"
    fi
  done < <(grep -oE '\]\([^)]*\)' "$md_file" | sed -E 's/^\]\((.*)\)$/\1/' || true)
done < <(find "$bundle_dir" -type f -name '*.md' -print0)

printf '\nSUMMARY | checked=%d | failed=%d\n' "$checked" "$failed"
if [[ "$failed" -ne 0 ]]; then
  exit 1
fi
