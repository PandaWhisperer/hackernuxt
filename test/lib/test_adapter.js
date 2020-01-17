import _ from 'lodash'
import assert from 'assert'

export default class TestAdapter {
  constructor(data) {
    this.data = require(data)
  }

  get(path) {
    assert.strictEqual(typeof path, 'string', 'path must be a String')

    return _.get(this.data, path.replace(/\//g, '.').slice(1))
  }

  ref(path) {
    const data = this.get(path)

    if (data) {
      return new Ref(data)
    } else {
      throw new Error(`${path} not found`)
    }
  }
}

class Ref {
  constructor(data) {
    this.data = data
  }

  async once() {
    return {
      val: () => this.data
    }
  }
}
