import React from 'react'
import { PostDeleteConfirmation } from './PostDeleteConfirmation'
import postCategoryConfig from './postCategoryConfig'

class PostModalSetting extends React.Component {
  componentDidMount() {
    //INITIALIZE MATERIALIZE CSS COMPONENTS
    let elems = document.querySelectorAll('.chips')
    let instances = M.Chips.init(elems, {
      ...postCategoryConfig,
      data: this.props.categories.map(category => ({
        tag: category
      })),
      onChipAdd: e => this.props.onChangeHandler(instances[0]),
      onChipDelete: e => this.props.onChangeHandler(instances[0])
    })
  }
  render() {
    const { postId } = this.props
    return (
      <div id="settingsModal" class="modal bottom-sheet">
        <div class="modal-content">
          <h4>Post Other Settings</h4>
          <ul class="collection">
            <li class="collection-item avatar">
              <i class="material-icons circle">folder</i>
              <span class="title">Title</span>
              <p>
                First Line
                <br /> Second Line
              </p>
              <a href="#!" class="secondary-content">
                <i class="material-icons">grade</i>
              </a>
            </li>
            <li class="collection-item avatar">
              <i class="material-icons circle green">assessment</i>
              <span class="title">Category Tags</span>
              <div className="chips chips-autocomplete ">
                <input
                  className="input"
                  id="inputChip"
                  placeholder="Category"
                  name="categories"
                />
              </div>
              <a href="#!" class="secondary-content">
                <i class="material-icons">grade</i>
              </a>
            </li>
            <li class="collection-item avatar">
              <i class="material-icons circle red">delete</i>
              <a class="modal-trigger" href="#confirmationModal">
                <span class="title">Delete</span>
              </a>
              <p>This will delete the entire post</p>
              <PostDeleteConfirmation {...postId}></PostDeleteConfirmation>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default PostModalSetting
