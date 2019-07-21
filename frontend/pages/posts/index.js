import React from 'react'
import { Post } from '../../components/post'

let PostSample = [
  {
    postid: 1,
    title: 'Healthcare Awareness For 2019',
    author: 'author1',
    date: 'date1',
    details:
      'Consectetur est consequat incididunt anim ex quis pariatur commodo laborum laborum occaecat anim ea incididunt. Eiusmod ullamco est consequat ipsum aliqua ea qui irure aute commodo voluptate. Nisi incididunt fugiat exercitation et ea consectetur.Tempor minim minim cillum dolor reprehenderit adipisicing et eu veniam incididunt cupidatat duis. Consectetur velit duis anim sint ad commodo deserunt ex anim minim pariatur veniam tempor. Deserunt irure do ullamco amet consequat occaecat esse reprehenderit nulla sit ea. Sunt labore adipisicing commodo laboris sint ullamco.Ex nisi sint esse do nulla Lorem in tempor veniam ea. Id minim sint quis tempor ea in Lorem ullamco eu incididunt labore exercitation nostrud occaecat. Id Lorem ea eiusmod velit ad velit minim irure. Aliqua est mollit eu consectetur dolor cupidatat cupidatat elit.',
    categ: ['categ1-1', 'categ1-2']
  },
  {
    postid: 2,
    title:
      'Something Homelessness title Over Here That Is Convincing that it looks okay',
    author: 'author2',
    date: 'date2',
    details: 'details2',
    categ: ['categ2-1', 'categ2-2']
  },
  {
    postid: 3,
    title: 'Title3',
    author: 'author3',
    date: 'date3',
    details: 'details3',
    categ: ['categ3-1', 'categ3-2']
  }
]

class Posts extends React.Component {
  state = {
    pages: 10,
    showNo: 3,
    CurrentCollection: 1
  }

  createPagination = () => {
    var list = []

    for (let i = 1; i <= this.state.pages; i++) {
      list.push(
        <li
          key={i}
          className={
            this.state.CurrentCollection == i ? 'active' : 'waves-effect'
          }
        >
          <a href="#!">{i}</a>
        </li>
      )
      // console.log(this.state.CurrentCollection + " " + i + " "+ this.state.pages);
    }

    return list
  }

  render() {
    return (
      <div>
        {/* POST PREVIEW LIST*/}
        <div styles="margin:auto">
          {PostSample.map(post => (
            <Post
              postid={post.postid}
              key={post.postid}
              title={post.title}
              author={post.author}
              date={post.date}
              details={post.details}
              categ={post.categ}
            />
          ))}
        </div>

        {/* PAGINATION */}

        <ul className="pagination center-align">
          <li
            className={
              this.state.CurrentCollection == 1 ? 'disabled' : 'waves-effect'
            }
          >
            <a href="#!">
              <i className="material-icons">chevron_left</i>
            </a>
          </li>
          {this.createPagination()}
          <li
            className={
              this.state.CurrentCollection == this.state.pages
                ? 'disabled'
                : 'waves-effect'
            }
          >
            <a href="#!">
              <i className="material-icons">chevron_right</i>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Posts
