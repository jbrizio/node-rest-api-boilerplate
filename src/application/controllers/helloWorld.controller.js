class HelloWorldCtrl {
  /**
   * Get list of users.
   * @async
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @param {Object} next - Express middleware handler.
   */
  async sayHi(req, res, next) {
    return res.send('Hello World');
  }
}

module.exports = HelloWorldCtrl;
