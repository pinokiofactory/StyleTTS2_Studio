module.exports = {
  run: [{
    method: "shell.run",
    params: {
      message: "git pull"
    }
  }, {
    method: "shell.run",
    params: {
      path: "app",
      message: "git pull"
    }
  },
  {
    method: "fs.link",
    params: {
      venv: "app/env"
    }
  }]
}
