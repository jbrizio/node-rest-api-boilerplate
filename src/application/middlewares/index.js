class Middlewares {
  notFound(req, res) {
    res.status(404).json({
      status: 404,
      message: 'Not Found',
      timestamp: Date.now(),
    });
  }

  serverError(error, req, res, next) {
    res.status(500).json({
      status: 500,
      message: error.message,
      timestamp: Date.now(),
    });
  }
}

module.exports = Middlewares;
