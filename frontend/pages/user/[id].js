import React from 'react'
import { useRouter } from 'next/router'

import ProfileSummary from '../../components/ProfileSummary'
import ProfileAbout from '../../components/ProfileAbout'

import ProfilePublication from '../../components/ProfilePublication'
import profileData from '../../public/data/example.json'

const ProfilePage = () => {
  const router = useRouter()
  const { uid } = router.query

  return (
    <>
      {style}
      <div className="container profile-container">
        <ProfileSummary profile={profileData} />
        <ProfileAbout profile={profileData} />
        <ProfilePublication />
      </div>
    </>
  )
}

const style = (
  <style jsx="true">{`
    .profile-container {
      margin: 2rem auto;
    }
  `}</style>
)

export default ProfilePage
