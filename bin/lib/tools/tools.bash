# shellcheck source=../git/core.bash  # @root
# shellcheck source=_.bash            # @install
# shellcheck source=../utils/npm.bash # @consistent @lock

# Example: run tools npm ci
# Example: run tools npm i vercel@latest
#
# Example: run tools install
tools() {
  pushd "$(@root)/tools" >/dev/null || exit 1
  trap 'popd >/dev/null' ERR

  if [[ ${#@} -eq 0 ]]; then
    set -- install
  fi

  local arg args=()
  for arg in "${@}"; do
    shift

    if [[ ${#args[@]} -eq 0 ]]; then
      case "${arg}" in
      install)
        if ! @consistent; then npm ci && @lock; fi
        @install vendor/gh vendor/gum vendor/jq
        ;;
      --) continue ;;
      *) args+=("${arg}") ;;
      esac
      continue
    fi

    if [[ "${arg}" == '--' ]]; then
      "${args[@]}"
      args=()
      continue
    fi
    args+=("${arg}")
  done
  "${args[@]}"

  popd >/dev/null || exit 1
}
