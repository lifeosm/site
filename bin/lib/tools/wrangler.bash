# shellcheck source=../utils/env.bash   # @env @key @token
# shellcheck source=../utils/print.bash # @fatal

set_wrangler_token() { @token store 'Cloudflare API' 40; }

_wrangler=$(which wrangler || true)

wrangler() {
  [ -z "${_wrangler}" ] && @fatal please setup environment first

  local args=("${@}")
  "${_wrangler}" "${args[@]}"
}
