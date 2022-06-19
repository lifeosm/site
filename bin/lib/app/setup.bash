# shellcheck source=refresh.bash            # refresh
# shellcheck source=../tools/github.bash    # set_github_token
# shellcheck source=../tools/graphite.bash  # set_graphite_token
# shellcheck source=../tools/sentry.bash    # set_sentry_token
# shellcheck source=../tools/vercel.bash    # set_vercel_token
# shellcheck source=../tools/wrangler.bash  # set_wrangler_token

setup() {
  [ ! -f .env ] && cp .env.example .env

  set_github_token || true
  set_graphite_token || true
  set_sentry_token || true
  set_vercel_token || true
  set_wrangler_token || true

  refresh
}
