import React, { Component } from 'react'
import Layout from '../../components/Layout'
import ProfileHeader from '../../components/ProfileHeader'
import ProfileContent from '../../components/ProfileContent'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '1',
      name: 'John Doe',
      title: 'Professor, BSc Calcutta, MSc Kanpur, MTech PhD IIT Madras',
      img: '',
      profession: 'Lecturer',
      workplace: 'UWA',
      address: 'Perth, Western Australia',
      phone: '123456789',
      email: 'johndoe@email.com',
      website: 'https://www.johndoe.com',
      facebook: 'https://www.facebook.com',
      twitter: 'https://www.twitter.com',
    }
  }
  render() {
    return (
      <Layout>
        <div class="container">
          <ProfileHeader info={this.state} />
          <ProfileContent />
        </div>
      </Layout>
    )
  }
}

export default Index
