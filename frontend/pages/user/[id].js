import React, { Component } from 'react'
import Layout from '../../components/Layout'
import ProfileHeader from '../../components/ProfileHeader'
import ProfileContent from '../../components/ProfileContent'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '004',
      name: 'Kurisu Makise',
      title: 'Genius Girl, The Zombie, Assistant, Christina, Celeb Thirty',
      img: 'https://png2.kisspng.com/sh/0d78ce487ddfee85052c70224a50b262/L0KzQYm3V8ExN6tAf5H0aYP2gLBuTft2epp4jZ92YXvsg7a0kvlvfJJ3hAc2b3vkcra0kCRmcZ94RdlqdHWwQH70ggl2epoyiAZuaX72PbjolPUuc6Z3geVALUXlRIWAgcI3a5MAftYDLka6RoO3V8E3OWY4SaQ6NEO6RIm6VMEveJ9s/kisspng-kurisu-makise-rintarou-okabe-steins-gate-0-mayuri-steins-gate-kurisu-5b447a26cb9fd8.6762071615312143748341.png',
      profession: 'Lab Member 004',
      workplace: 'Future Gadget Lab',
      address: 'Akihabara, Taito City, Tokyo 110-0006, Japan',
      phone: '123456789',
      email: 'celebthirty@gmail.com',
      website: 'https://steins-gate.fandom.com/wiki/Kurisu_Makise',
      facebook: 'https://steins-gate.fandom.com/wiki/Kurisu_Makise',
      twitter: 'https://steins-gate.fandom.com/wiki/Kurisu_Makise',
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
