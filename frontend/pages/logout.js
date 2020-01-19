import React from 'react'
import { Consumer } from '../Context'
import Router from 'next/router'
export default LogOut => {
  return (
    <Consumer>
      {context => {
        context.actions
          .signOut()
          .then(Router.push('/'))
          .catch(err => console.log(err))
      }}
    </Consumer>
  )
}
