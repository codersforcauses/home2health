import { useRouter } from 'next/router'
import React from 'react'
import { Consumer } from '../Context'
export default LogOut => {
  const router = useRouter()

  return (
    <Consumer>
      {context => {
        context.actions
          .signOut()
          .then(() => router.replace('/'))
          .catch(err => console.log(err))
      }}
    </Consumer>
  )
}
