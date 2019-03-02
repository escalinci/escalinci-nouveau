workflow "Test and build on push" {
  on = "push"
  resolves = ["Build"]
}

action "Install Dependencies" {
  uses = "./action-yarn"
  args = "install --frozen-lockfile"
}

action "Build" {
  uses = "./action-yarn"
  needs = ["Install Dependencies"]
  args = "build"
}
