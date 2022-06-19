# shellcheck source=../utils/env.bash   # @env @key @token
# shellcheck source=../utils/print.bash # @fatal

set_github_token() { @token store GitHub 40; }

_gh=$(which gh || true)

# Useful: gh repo set-default
# It sets `gh-resolved = base` for selected remote, e.g., `[remote "origin"]`.
github() {
  [ -z "${_gh}" ] && @fatal please setup environment first

  local args=("${@}")
  "${_gh}" "${args[@]}"
}

@workflows() {
  local action=${1:-$(gum choose disable enable)}
  case "${action}" in
  disable)
    local workflow workflows
    workflows=$(
      github workflow list |
        gum choose --no-limit |
        awk '{print $NF}'
    )
    for workflow in ${workflows}; do
      github workflow disable "${workflow}"
    done
    ;;

  enable)
    local workflow workflows
    workflows=$(
      github workflow list --all |
        grep disabled |
        gum choose --no-limit |
        awk '{print $NF}'
    )
    for workflow in ${workflows}; do
      github workflow enable "${workflow}"
    done
    ;;

  *) @fatal unknown action "${action}" ;;
  esac
}
