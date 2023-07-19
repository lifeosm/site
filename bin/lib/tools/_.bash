# shellcheck source=../git/core.bash # @root
# shellcheck source=../utils/os.bash # @os @arch

_NPMBINPATH="$(@root)/tools/node_modules/.bin"
if [[ ":${PATH}:" != *":${_NPMBINPATH}:"* ]]; then
  export PATH="${_NPMBINPATH}:${PATH}"
fi

_BINPATH="$(@root)/bin/$(@os)/$(@arch)"
if [[ ":${PATH}:" != *":${_BINPATH}:"* ]]; then
  export PATH="${_BINPATH}:${PATH}"
fi
[ -d "${_BINPATH}" ] || mkdir -p "${_BINPATH}"

# Example: run @install path/to/gum vendor/gum https://install.octolab.org/vendor/gum
@install() {
  local path=${_BINPATH} script
  for script in "${@}"; do
    if [[ "${script}" =~ ^vendor/ ]]; then
      script="https://install.octolab.org/${script}"
    fi
    if [[ ! "${script}" =~ ^https:// ]] && [ ! -f "${script}" ]; then
      script="https://install.octolab.org/${script}"
    fi

    [[ "${script}" =~ ^https:// ]] && [ \
      "$(curl -s -o /dev/null -w '%{http_code}' --head "${script}")" -eq "200" \
      ]
    [[ ! "${script}" =~ ^https:// ]] && [ -x "${script}" ]

    if [[ "${script}" =~ ^https://install.octolab.org/vendor ]]; then
      curl -sSf "${script}" | bash -s -- "${path}"
    elif [[ "${script}" =~ ^https://install.octolab.org ]]; then
      curl -sSf "${script}" | sh -s -- -b "${path}"
    else
      ${script} "${path}"
    fi
  done
}
