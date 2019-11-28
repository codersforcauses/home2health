import React from 'react'

import Link from 'next/link'
import { useRouter, withRouter } from 'next/router'

/*
The ideal POST REQUEST OF THIS PAGE IS
{
  postid: -- (int) - can be taken via router query request
}

The ideal POST RESPONSE OF THIS PAGE IS
{
  {
    title:--, (string)
    author: --, (string)
    date: --, (string - date)
    post: -- (string - rich text format -> NOTE : Not sure what to use for this one as the post can have various positioning),
    categ: [], (array of strings)
  }
  ... more items for post (n number of post... not yet decided)
}
*/
class LongPost extends React.Component {
  state = {
    data: {
      postid: this.props.router.query.id,
      title: 'Healthcare Awareness For 2019',
      author: 'author1',
      date: 'date1',
      details:
        'Consectetur est consequat incididunt anim ex quis pariatur commodo laborum laborum occaecat anim ea incididunt. Eiusmod ullamco est consequat ipsum aliqua ea qui irure aute commodo voluptate. Nisi incididunt fugiat exercitation et ea consectetur.Tempor minim minim cillum dolor reprehenderit adipisicing et eu veniam incididunt cupidatat duis. Consectetur velit duis anim sint ad commodo deserunt ex anim minim pariatur veniam tempor. Deserunt irure do ullamco amet consequat occaecat esse reprehenderit nulla sit ea. Sunt labore adipisicing commodo laboris sint ullamco.Ex nisi sint esse do nulla Lorem in tempor veniam ea. Id minim sint quis tempor ea in Lorem ullamco eu incididunt labore exercitation nostrud occaecat. Id Lorem ea eiusmod velit ad velit minim irure. Aliqua est mollit eu consectetur dolor cupidatat cupidatat elit.',
      categ: ['categ1-1', 'categ1-2']
    }
  }

  componentDidMount() {
    /*this.setState({ loading: true });
		fetch("https://hplussport.com/api/products/order/price/sort/asc/qty/1")
			.then(data => data.json())
			.then(data => this.setState({ data, loading: false }));*/
  }

  render() {
    const { postid, title, author, date, details, categ } = this.state.data
    return (
      <div>
        <h1 className="center-align">
          {title} [#{postid}]
        </h1>
        <h2 className="center-align">
          By: {author} on {date}
        </h2>

        <p>{details}</p>
      </div>
    )
  }
}

export default withRouter(LongPost)
