import React from 'react'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import './postPreview.css'

/*
    title: Indicates title of post
    author: indicates creator of post
    datetime : when the post is created
    details: content of the post (limit to 500 characters for preview)?
    categories: categories at which the post categorized as 

    Plan: Create a preview of the post that is clickable and displayed as a full website
*/

export const PostPreview = ({
  // Default Values
  _id = 0,
  title = 'Title Missing',
  authorName = 'Author Missing',
  datetime = 'datetime Missing',
  overview = 'Preview Details Missing',
  categories = ['#something1', 'Something2']
}) => {
  let date = new Date(datetime)
  return (
    <Link prefetch as={`/post/${_id}`} href={`/post/[id]`}>
      <a>
        <div class="card hoverable post-preview blue-text text-darken-4">
          <div className="card-content ">
            <span className="card-title">
              <strong>
                <ReactMarkdown
                  source={title}
                  escapeHtml={false}
                ></ReactMarkdown>
              </strong>
            </span>

            <blockquote className="subtitle">
              <p>{` Posted By: ${authorName} on ${date.toDateString()}`}</p>
            </blockquote>
            <p>
              <ReactMarkdown
                source={overview}
                escapeHtml={false}
              ></ReactMarkdown>
            </p>
            <div className="tags">
              {categories.map((category, i) => {
                return (
                  <div key={i} className="chip">
                    {category}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* <div className="row post">
          <div className="col s12">
            <div className="card hoverable blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">{title}</span>
                <blockquote className="subtitle">
                  <p>{` Posted By: ${author} on ${datetime}`}</p>
                </blockquote>

                <p>{details}</p>
              </div>
              <div className="tags">
                {categories.map((category, i) => {
                  return (
                    <div key={i} className="chip">
                      {category}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div> */}
      </a>
    </Link>
  )
}
