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
      console.error(e)
      if (e.response && e.response.data) {
        return e.response.data.errors
      }
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
      console.error(e)
      if (e.response && e.response.data) {
        return e.response.data.errors
      }
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
      console.error(e)
      if (e.response && e.response.data) {
        return e.response.data.errors
      }
      return null
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
      console.error(e)
      if (e.response && e.response.data) {
        return e.response.data.errors
      }
      return null
    }
  }
  async createComment(comment) {
    try {
      const response = await this.api('post/' + comment.post, 'POST', comment)
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
      console.error(e)
      if (e.response && e.response.data) {
        return e.response.data.errors
      }
      return null
    }
  }
  async deleteComment(postID, commentID) {
    try {
      const response = await this.api(
        `post/${postId}/${commentID}`,
        'DELETE',
        null
      )
      if (response.status === 204) {
        return response
      } else if (response.status === 400) {
        return response.json().then(data => {
          return data.errors
        })
      } else {
        throw new Error(response.message)
      }
    } catch (e) {
      console.error(e)
      if (e.response && e.response.data) {
        return e.response.data.errors
      }
      return null
    }
  }
  async editComment(postID, commentID, comment) {
    try {
      const response = await this.api(`post/${postId}/${commentID}`, 'PATCH', {
        content: comment
      })
      if (response.status === 200) {
        return response
      } else if (response.status === 400) {
        return response.json().then(data => {
          return data.errors
        })
      } else {
        throw new Error(response.message)
      }
    } catch (e) {
      console.error(e)
      if (e.response && e.response.data) {
        return e.response.data.errors
      }
      return null
    }
  }
}
