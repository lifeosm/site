# shellcheck source=../../config/global.bash  # $config
# shellcheck source=../../utils/env.bash      # @token
# shellcheck source=install.bash              # install
# shellcheck source=node.bash                 # @node

# Example: run build [--from-scratch]
# Example: run build docker [--from-scratch]
build() {
  # docker way
  if [ "${1:-}" == 'docker' ]; then
    if [ "${2:-}" == '--from-scratch' ]; then
      docker rmi "${config['image']}" || true
    fi
    docker build \
      -f Dockerfile \
      -t "${config['image']}" .
    return
  fi

  # local way
  [ "${1:-}" == '--from-scratch' ] && rm -rf .next && install "${@}"
  @node npm run build
}
