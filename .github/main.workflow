workflow "Test, Build and Deploy on Push" {
  on = "push"
  resolves = [
    "Deploy to Production",
    "Deploy to Staging",
  ]
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

action "Run on Master" {
  uses = "actions/bin/filter@master"
  needs = ["Build"]
  args = "branch master"
}

action "Deploy to Production" {
  uses = "netlify/actions/cli@master"
  needs = ["Run on Master"]
  args = "deploy --dir=public --prod"
  secrets = ["NETLIFY_AUTH_TOKEN", "NETLIFY_SITE_ID"]
}

action "Run on PR" {
  uses = "actions/bin/filter@master"
  needs = ["Build"]
  args = "not branch master"
}

action "Deploy to Staging" {
  uses = "netlify/actions/cli@master"
  needs = ["Run on PR"]
  args = "deploy --dir=public"
  secrets = ["NETLIFY_AUTH_TOKEN", "NETLIFY_SITE_ID"]
}
