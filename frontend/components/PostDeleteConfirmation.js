import React from 'react'
import Axios from 'axios'
import Router from 'next/router'
export const PostDeleteConfirmation = ({ postId }) => {
  const deletePost = _id => {
    const baseURL = process.env.API_BACKEND_URL
    const apiPath = `${baseURL}/post/${_id}`
    Axios.delete(apiPath, {})
      .then(response => {
        M.toast({
          html: 'Successfully Deleted',
          classes: 'rounded green'
        })
        Router.push(`/posts/1`)
      })
      .catch(err => {
        M.toast({
          html: 'Oops, Something Went Wrong',
          classes: 'rounded red'
        })
        console.log(err)
      })
  }
  return (
    // <!-- Modal Structure -->
    <div id="confirmationModal" class="modal">
      <div class="modal-content">
        <h4>Are you sure?</h4>
        <p>This will delete the entire post</p>
      </div>
      <div class="modal-footer">
        <a href="#!" class="modal-close waves-effect waves-green btn-flat">
          No
        </a>
        <a
          class="modal-close waves-effect waves-red btn-flat"
          onClick={e => deletePost(postId)}
        >
          Yes
        </a>
      </div>
    </div>
  )
}
