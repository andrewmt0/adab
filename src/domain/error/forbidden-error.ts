export default class ForbiddenError extends Error {
  constructor(message = 'Forbidden') {
    super(message)
    this.name = 'Forbidden'
  }
}
