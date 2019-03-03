workflow "Test and build on push" {
  on = "push"
  resolves = ["Deploy"]
}

action "Install Dependencies" {
  uses = "./action-yarn"
  args = "install --frozen-lockfile"
}

action "Check Prettiness" {
  uses = "./action-yarn"
  needs = ["Install Dependencies"]
  args = "check-prettiness"
}

action "Lint JS" {
  uses = "./action-yarn"
  needs = ["Install Dependencies"]
  args = "lint-js"
}

action "Lint Styles" {
  uses = "./action-yarn"
  needs = ["Install Dependencies"]
  args = "lint-styles"
}

action "Build" {
  uses = "./action-yarn"
  needs = ["Check Prettiness", "Lint JS", "Lint Styles"]
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
  args = "deploy --dir=public --prod"
  secrets = ["NETLIFY_AUTH_TOKEN", "NETLIFY_SITE_ID"]
}
