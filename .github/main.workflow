workflow "Test and build on push" {
  on = "push"
  resolves = ["Deploy"]
}

action "Install Dependencies" {
  uses = "./action-yarn"
  args = "install --frozen-lockfile"
}

action "Lint" {
  uses = "./action-yarn"
  needs = ["Install Dependencies"]
  args = "prettier '**/*.js' --check --ignore-path .gitignore"
}

action "Build" {
  uses = "./action-yarn"
  needs = ["Lint"]
  args = "build"
}

action "Filters for GitHub Actions" {
  uses = "actions/bin/filter@master"
  needs = ["Build"]
  args = "branch master"
}

action "Deploy" {
  uses = "netlify/actions/cli@master"
  needs = ["Filters for GitHub Actions"]
  args = "netlify deploy --dir=public --prod"
  secrets = ["NETLIFY_AUTH_TOKEN", "NETLIFY_SITE_ID"]
}
