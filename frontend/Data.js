import config from './config'

export default class Data {
  api(path, method = 'GET', body = null) {
    const url = config.apiBaseUrl + path

    const options = {
      method,
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    }

    if (body !== null) {
      options.body = JSON.stringify(body)
    }

    return fetch(url, options)
  }

  async getUser() {
    const response = await this.api(`/users/profile`, 'GET', null)
    if (response.status === 200) {
      return response.json().then(data => data)
    } else if (response.status === 401) {
      return null
    } else {
      throw new Error()
    }
  }

  async createUser(user) {
    const response = await this.api('/users/register', 'POST', user)
    if (response.status === 201) {
      return []
    } else if (response.status === 400) {
      return response.json().then(data => {
        return data.errors
      })
    } else {
      throw new Error()
    }
  }
}
