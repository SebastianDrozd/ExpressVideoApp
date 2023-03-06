class ConnectionError extends Error {
  constructor() {
    super();
    this.name = 'ConnectionError';
    this.statusCode = 500;
    this.message = "There was a problem with the connnection to the database.";
  }
}
module.exports = ConnectionError