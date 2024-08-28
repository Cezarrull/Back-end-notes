module.exports = {
  apps : [{
    name: "app",
    script: "./src/sever.js",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}