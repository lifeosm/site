# shellcheck source=deps.bash         # deps
# shellcheck source=../git/core.bash  # @pull

refresh() {
  @pull

  deps install
  deps tools
}
