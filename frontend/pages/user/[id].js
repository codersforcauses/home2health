import React from 'react'
import { useRouter } from 'next/router'

import ProfileHeader from '../../components/ProfileHeader'
import ProfileContent from '../../components/ProfileContent'

import profileData from '../../public/data/example.json'

const ProfilePage = () => {
  const router = useRouter()
  const { uid } = router.query

  return (
    <div class="container">
      <ProfileHeader uid={uid} profile={profileData} />
      <ProfileContent profile={profileData} />
    </div>
  )
}

export default ProfilePage
