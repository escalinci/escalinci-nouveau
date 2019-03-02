workflow "Test and build on push" {
  on = "push"
  resolves = ["Build"]
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

