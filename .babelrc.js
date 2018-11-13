module.exports = {
  "presets": [
    require("@babel/preset-env")
  ],
  "env": {
    "test": {
      "plugins": ["istanbul"]
    }
  }
}

