import React from 'react'
import Axios from 'axios'
import Link from 'next/link'
import { useRouter, withRouter } from 'next/router'

/*
The ideal POST REQUEST OF THIS PAGE IS
{
  postid: -- (int) - can be taken via router query request
}

The ideal POST RESPONSE OF THIS PAGE IS
{
  {
    title:--, (string)
    author: --, (string)
    date: --, (string - date)
    post: -- (string - rich text format -> NOTE : Not sure what to use for this one as the post can have various positioning),
    categories: [], (array of strings)
  }
  ... more items for post (n number of post... not yet decided)
}
*/
class LongPost extends React.Component {
  state = {
    data: {},
    loading: true
  }

  componentDidMount() {
    let id = this.props.router.query.id
    const baseURL = 'http://localhost:5001' //process.env.REACT_APP_BACKEND_URL
    const apiPath = `${baseURL}/post/${id}`
    Axios.post(apiPath, {})
      .then(response => this.setState({ data: response.data, loading: false }))
      .catch(err => console.log(err))
  }

  render() {
    const { _id, title, author, date, details, categories } = this.state.data
    return (
      <div>
        <h1 className="center-align">
          {title} [#{_id}]
        </h1>
        <h2 className="center-align">
          By: {author} on {date}
        </h2>

        <p>{details}</p>
      </div>
    )
  }
}

export default withRouter(LongPost)
