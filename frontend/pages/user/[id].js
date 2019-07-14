import React, { Component } from 'react'
import Layout from '../../components/Layout'
import ProfileHeader from '../../components/ProfileHeader'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.json())
      .then(json => {
        this.setState({
          img:
            'https://i.kym-cdn.com/photos/images/original/001/207/210/b22.jpg',
          id: json.id,
          name: json.name,
          title: 'Professor, BSc Calcutta, MSc Kanpur, MTech PhD IIT Madras',
          profession: 'Professor',
          email: json.email,
          address: json.address,
          workplace: json.company,
          website: json.website,
          description: 'insert joke'
        })
      })
  }

  render() {
    return (
      <Layout>
        <div class="container">
          <ProfileHeader info={this.state} />
        </div>
      </Layout>
    )
  }
}

export default Index
