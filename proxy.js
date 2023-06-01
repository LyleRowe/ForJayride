const PROXY_CONFIG = {
  "/api/*": {
    "target": "https://jayridechallengeapi.azurewebsites.net",
    "secure": true,
    "changeOrigin": true,
    "logLevel": "debug",
    pathRewrite: {
      '^/api': '/api/QuoteRequest'
    }
  }
}

module.exports = PROXY_CONFIG;