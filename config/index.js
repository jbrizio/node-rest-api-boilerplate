const config = {
  endpoint: '/api',
  env: process.env.NODE_ENV || 'dev',
  logging: ':method :url :status [:response-time ms] :date[web]',
  port: process.env.PORT || 3000,
};

module.exports = config;
