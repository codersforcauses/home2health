import axios from 'axios'
export default class Data {
  api(
    path,
    method = 'GET',
    body = null,
    requiresAuth = false,
    credentials = null
  ) {
    const url =
      (process.env.API_BACKEND_URL || 'http://localhost:5000') + '/' + path
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    }

    if (body !== null) {
      options.body = JSON.stringify(body)
    }
    if (requiresAuth) {
      const encodedCredentials = btoa(
        `${credentials.email}:${credentials.password}`
      )
      options.headers['Authorization'] = `Basic ${encodedCredentials}`
    }

    return axios({
      url: url,
      method: options.method,
      headers: options.headers,
      data: body,
      withCredentials: true
    })
  }

  async signInUser(email, password) {
    try {
      const response = await this.api(`users/login`, 'POST', null, true, {
        email,
        password
      })
      if (response.status === 200) {
        return response.data
      } else if (response.status === 401) {
        return null
      } else {
        throw new Error()
      }
    } catch (e) {
      return null
    }
  }
  async signOutUser() {
    try {
      const response = await this.api(`users/logout`, 'GET', null)
      if (response.status === 204) {
        return response.data
      } else if (response.status === 401) {
        return null
      } else {
        throw new Error()
      }
    } catch (e) {
      console.log(e)
      return null
    }
  }

  async createUser(user) {
    try {
      const response = await this.api('users/register', 'POST', user)
      if (response.status === 200) {
        return []
      } else if (response.status === 400) {
        return response.json().then(data => {
          return data.errors
        })
      } else {
        throw new Error(response.message)
      }
    } catch (e) {
      return e.response.data.errors
    }
  }
  async createPost(post) {
    try {
      const response = await this.api('post/', 'POST', post)
      if (response.status === 201) {
        return response
      } else if (response.status === 400) {
        return response.json().then(data => {
          return data.errors
        })
      } else {
        throw new Error(response.message)
      }
    } catch (e) {
      console.log(e)
      return e.response.data.errors
    }
  }
}
