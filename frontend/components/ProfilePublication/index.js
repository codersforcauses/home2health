import React, { Component } from 'react'

import Publication from './Publication'

const datas = [
  { title: 'Publication1', desc: 'Description1!', link: 'google.com' },

  { title: 'Publication2', desc: 'Description2!', link: 'google.com' }
]

class ProfilePublication extends Component {
  render() {
    return (
      <>
        {style}
        <div className="grey lighten-1 profileContent">
          <div className="col s12" style={{ padding: 0 }}>
            <h4 style={{ margin: '0', color: '#0f6489' }}>Publications</h4>
            <div>
              {datas.map(data => (
                <Publication data={data} />
              ))}
            </div>
          </div>
        </div>
      </>
    )
  }
}

const style = (
  <style jsx="true">{`
    .profileContent {
      margin: 2rem auto;
    }
  `}</style>
)

export default ProfilePublication
